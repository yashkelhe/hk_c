import React from "react";
import { useNavigate } from "react-router-dom";
function VideoCart(props) {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={props.image}
        onClick={() => {
          navigate(`/video`);
        }}
        className="rounded-md  cursor-pointer"
        alt=""
      />
      <div className="grid grid-cols-12 pt-2 cursor-pointer ">
        <div className="col-span-1 ">
          <img
            className="w-12 h-12  rounded-full"
            src={props.ThumbImage}
            alt="aviator"
          />
        </div>
        <div className="col-span-11  pl-1">
          <div>{props.title}</div>
          <div className="text-gray-600 text-base  ">{props.description}</div>
          <div className="text-gray-600 text-base  ">
            {props.author} | {props.views} |{props.timeStamp}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCart;
