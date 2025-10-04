/* eslint-disable react/prop-types */
import React, { useRef } from "react";


const isYouTubeUrl = (url) =>
  typeof url === "string" && url.includes("youtube.com");

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  console.log("videoUrl", videoUrl);

  console.log("videoUrl", videoUrl);
  return (
    <div className="w-full h-full flex flex-col items-center">
     {isYouTubeUrl(videoUrl) ? (
        <iframe
          width="100%"
          height="400"
          src={videoUrl.replace("watch?v=", "embed/")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg border"
        ></iframe>
      ) : (
        <video
          ref={videoRef}
          controls
          autoPlay
          loop
          className="w-full h-full border flex items-center rounded-lg object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
