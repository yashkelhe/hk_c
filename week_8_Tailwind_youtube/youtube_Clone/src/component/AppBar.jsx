import React from "react";
import SearchBar from "./SearchBar";

function AppBar() {
  return (
    <div className="flex justify-between px-3 pt-1">
      <div className="inline-flex items-center ">youtube</div>
      <div>
        <SearchBar />
      </div>
      <div className="inline-flex items-center ">logo</div>
    </div>
  );
}

export default AppBar;
