import React, { useState, useEffect } from "react";
import { CreateTodo } from "./component/CreateTodo";
import Todos from "./component/Todos";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("https://harkirat-course-5.onrender.com/todo")
      .then(async (resolve) => {
        const json = await resolve.json();
        setTodo(json.Alltodo);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  // if u do this in the component then it will tends to loop and Infinity req will send
  //  fetch("http://localhost:3000/todo")
  //    .then(async (resolve) => {
  //      const json = await resolve.json();
  //      setTodo(json.Alltodo);
  //    })
  //    .catch((error) => console.error("Error fetching todos:", error));
  return (
    <>
      <CreateTodo />
      <Todos
        // todos={[
        //   {
        //     title: "ehh",
        //     description: "hsahash",
        //     completed: false,
        //   },
        //   {
        //     title: "ehh",
        //     description: "hsahash",
        //     completed: true,
        //   },
        todos={todo}
      />
    </>
  );
}

export default App;
