import React, { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    fetch("https://harkirat-course-5.onrender.com/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      // headers is beacouse when we take the inout from the postman in headers then it checks the application as json
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to add todo");
        }
        const json = await response.json();
        alert("Todo added successfully");
        // Clear the input fields
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        alert("Error adding todo");
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}
