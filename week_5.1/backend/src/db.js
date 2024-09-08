const mongoose = require("mongoose");

mongoose.connect("take from newOne");

const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = { Todo };
