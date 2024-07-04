const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://yashkelhe01:cloPgLsFBjKvCpeF@newclustor.jud0fag.mongodb.net/Todo_full_stack"
);

const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = { Todo };
