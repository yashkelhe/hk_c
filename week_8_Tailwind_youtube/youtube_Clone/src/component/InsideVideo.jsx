import React from "react";
import { useNavigate } from "react-router-dom";
function InsideVideo() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        ghar vapis
      </button>
    </div>
  );
}

export default InsideVideo;
