import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import Signup from "./components/signup.jsx";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./components/First.jsx";

let router = createBrowserRouter([
  {
    //  linkdin.com/First
    path: "/",
    element: <App />,
    children: [
      {
        path: "First",
        element: <First />,
      },
    ],
  },
  {
    path: "/signUp",
    element: <Signup />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
