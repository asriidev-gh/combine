import React from "react";

const VideoContainer = ({ path, customStyle, isBg = false }) => {
  return (
    <div
      className={`${!isBg && "relative border border-gray-100 rounded-lg p-3"}`}
      dangerouslySetInnerHTML={{
        __html: `<video class=${`${
          customStyle ? customStyle : "w-full h-auto object-cover"
        } border border-gray-100 rounded-lg p-3`} autoplay loop muted playsinline>
      <source src=${path} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
      }}
    />
  );
};

export default VideoContainer;
