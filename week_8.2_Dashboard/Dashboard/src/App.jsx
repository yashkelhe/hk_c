import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsideBar from "./component/InsideBar";
import NavBar from "./component/NavBar";
import Sidebar from "./component/Sidebar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex ">
        <div className="w-[10%]">
          <Sidebar />
        </div>
        <div className="w-[90%]">
          <NavBar />
          <Routes>
            <Route path="/hello" element={<InsideBar />} />
          </Routes>
        </div>
      </div>
      ``
    </BrowserRouter>
  );
}

export default App;
