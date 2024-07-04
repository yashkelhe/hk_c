const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayLoad = req.body;
  const parsePayload = createTodo.safeParse(createPayLoad);

  if (!parsePayload.success) {
    return res.status(400).json({ msg: "You haven't entered the right value" });
  }

  // Add to the MongoDB
  await Todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });

  res.json({ msg: "The todo has been added" });
});

app.get("/todo", async (req, res) => {
  const Alltodo = await Todo.find({});
  if (!Alltodo || Alltodo.length === 0) {
    return res.status(404).json({ msg: "Todo not found" });
  }
  res.json({ Alltodo });
});

app.put("/completed", async (req, res) => {
  const createPayLoad = req.body;
  const parsePayload = updateTodo.safeParse(createPayLoad);

  if (!parsePayload.success) {
    return res.status(400).json({ msg: "You haven't entered the right value" });
  }

  try {
    await Todo.updateOne({ _id: req.body.id }, { $set: { completed: true } });
    res.json({ msg: "Todo is marked as completed" });
  } catch (err) {
    res.status(500).json({ msg: "Error", err: err });
  }
});

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
