const express = require("express");
const { Admin, Course } = require("../db");
const AdminMiddleware = require("../middleware/admin");

const router = express.Router();

router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // lets assume that the user hasnt signup yet

  Admin.create({
    username: username,
    password: password,
  })
    .then(() => {
      res.json({ msg: "Admin is  created successfully" });
    })
    .catch(() => {
      res.json({ msg: "there is an error with the creating admin" });
    });
});

// to assign new course
// and also this middleware is for to check and authentication
router.post("/courses", AdminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  console.log("ok");
  const newCourse = await Course.create({
    // if the key and value are same then u can write like this also
    title,
    description,
    imageLink,
    price,
  });
  // this id is taken from the DB which is created  by the mogoDB randomly
  res.json({ msg: "the course has been added ", courseID: newCourse._id });
});

router.get("/courses", AdminMiddleware, async (req, res) => {
  const find = await Course.find({});

  res.json({
    course: find,
  });
});

module.exports = router;
