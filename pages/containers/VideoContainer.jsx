import React from "react";

const VideoContainer = ({ path, customStyle }) => {
  return (
    <div className="relative border border-gray-100 rounded-lg p-3">
      <video
        autoPlay
        muted
        loop
        playsinline
        className={`${
          customStyle ? customStyle : "w-full h-auto object-cover"
        }`}
      >
        <source src={`/${path}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoContainer;
