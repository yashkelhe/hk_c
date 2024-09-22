import React from "react";
import { Link } from "react-router-dom";
import { Dashboard } from "./Dashboard";

function Home() {
  return (
    <div className="flex  justify-center items-center h-screen">
      <div>this is called Home</div>
      <div className="bg-yellow-400  ">
        <Link to={"/Dashboard"}>to go to the Dashboard</Link>
      </div>
    </div>
  );
}

export default Home;
