import React from "react";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className=" flex-colb bg-blue-600  pl-2 ">
      <div
        className="p-2"
        onClick={() => {
          navigate("/hello");
        }}
      >
        item 1
      </div>
      <div className="p-2">item 2 </div>
      <div className="p-2">item 3</div>
      <div className="p-2">item 4</div>
      <div className="p-2 pb-60">item 5</div>
      <div className="pt-60">LAST</div>
    </div>
  );
}

export default Sidebar;
