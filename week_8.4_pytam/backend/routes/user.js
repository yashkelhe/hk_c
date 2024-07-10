const express = require("express");
const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");
const zod = require("zod");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");
const bcrypt = require("bcrypt");
/////////////////////////////////////////////////////////////////////////////

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});
const toSignIn = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});
const toUpdate = zod.object({
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});
/////////////////////////////////////////////////////////////////////////////

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Incorrect inputs",
      // Send back the validation issues for better debugging
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });
  if (existingUser) {
    return res.status(409).json({
      message: "Email already taken",
    });
  }

  const user = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  // to create  an hash
  try {
    const hashedPassword = await user.createHash(req.body.password);
    user.password = hashedPassword;
    await user.save();
  } catch (err) {
    console.log(err);
    return res.json({ msg: "error while doing the hashing", err: err });
  }
  const userId = user._id;

  Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});
/////////////////////////////////////////////////////////////////////////////
router.post("/signin", async (req, res) => {
  const { success } = toSignIn.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Incorrect inputs",
      // Send back the validation issues for better debugging
    });
  }
  const varify = await User.findOne({
    username: req.body.username,
  });
  if (varify) {
    try {
      if (await varify.validatePassword(req.body.password)) {
        const token = jwt.sign(
          {
            userId: varify._id,
          },
          JWT_SECRET
        );
        return res.json({ msg: "the person is verified", token: token });
      }
    } catch (err) {
      res.json({ msg: "error in the validatating the password", err: err });
    }
  }

  return res.json({ msg: "please create an account " });
});
/////////////////////////////////////////////////////////////////////////////
// authMiddleware will check weather user is some
router.put("/update", authMiddleware, async (req, res) => {
  const { success } = toUpdate.safeParse(req.body);
  console.log(success);
  if (!success) {
    return res.status(400).json({
      message: "Incorrect inputs",
      // Send back the validation issues for better debugging
    });
  }
  console.log("first 1 ");

  try {
    const updateData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };

    // Only update the password if it is provided
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      updateData.password = hashedPassword;
    }

    await User.updateOne({ _id: req.userId }, updateData);
    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.json({ message: "Error while updating information", err: err });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////
router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});
module.exports = router;
