const { Router } = require("express");
const UserMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

const router = Router();

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username,
    password,
  });

  res.json({
    msg: "user is added ",
  });
});
router.get("/courses", async (req, res) => {
  const find = await Course.find({});

  res.json({
    course: find,
  });
});
// implement the logic which person is buy the perticular id number of course
// id =1 then course which is assign to 1 that will

router.post("/courses/:courseid", UserMiddleware, async (req, res) => {
  const courseId = req.params.courseid;
  const username = req.headers["username"];

  console.log("Username:", username);
  console.log("Course ID:", courseId);

  try {
    const result = await User.updateOne(
      { username },
      { $push: { purchesdCourse: courseId } } // Ensure the field name is correct
    );

    if (result.nModified === 0) {
      return res
        .status(404)
        .json({ msg: "User not found or course already purchased" });
    }

    res.json({ msg: "Purchase is complete" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

router.get("/purchesdCourse", UserMiddleware, async (req, res) => {
  try {
    // Check if username header is provided
    const username = req.headers.username;
    if (!username) {
      return res.status(400).json({ error: "Username header is missing" });
    }

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log(`User found: ${user}`);
    console.log(`Purchased courses: ${user.purchesdCourse}`);

    // Check if the user has purchased courses
    if (!user.purchesdCourse || user.purchesdCourse.length === 0) {
      return res.json({ courses: " [] not purchesdCourse" });
    }

    // Find courses by IDs in purchesdCourse
    const courses = await Course.find({
      // in course id is matched to the user  purchesdCourse id then it will return that course
      _id: {
        $in: user.purchesdCourse,
      },
    });

    console.log(`Courses found: ${courses}`);
    res.json({ courses });
  } catch (error) {
    console.error(`Error fetching purchased courses: ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
