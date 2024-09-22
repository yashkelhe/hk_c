const mongoose = require("mongoose");

mongoose.connect("take from newOne");

const AdminSchema = mongoose.Schema({
  username: String,
  password: String,
});
const UserSchema = mongoose.Schema({
  username: String,
  password: String,

  // this is the relational schema means it will take the data from the other table
  purchesdCourse: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});
const CourseSchema = mongoose.Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number,
});

// thia are the tables which are the created
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
