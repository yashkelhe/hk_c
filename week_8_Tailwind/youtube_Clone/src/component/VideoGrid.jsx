import React from "react";
import VideoCart from "./VideoCart";
import Data from "./Data";

function VideoGrid() {
  return (
    <div className="grid grid-cols-1 pl-2 md:grid-cols-2 lg:md:grid-cols-4">
      {Data.map((map) => {
        return (
          <div className="p-2">
            <VideoCart
              key={map.id}
              title={map.title}
              description={map.description}
              image={map.image}
              ThumbImage={map.ThumbImage}
              author={map.author}
              views={map.views}
              timeStamp={map.timeStamp}
            />
          </div>
        );
      })}
    </div>
  );
}

export default VideoGrid;
