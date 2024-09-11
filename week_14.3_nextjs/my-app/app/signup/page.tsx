"use client";

import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="p-4 border rounded pb-4">
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 m-2"
            type="text"
            value={username} // Bind input field to state
            placeholder="username"
          />
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 m-2"
            type="password"
            value={password} // Bind input field to state
            placeholder="password"
          />
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => {
                axios
                  .post("http://localhost:3000/api/user", {
                    username,
                    password,
                  })
                  .then(() => {
                    // Clear the input fields after successful sign-up
                    setUsername("");
                    setPassword("");
                  })
                  .catch((error) => {
                    console.error("There was an error!", error);
                  });
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
