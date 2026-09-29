import React from "react";
const Vidio = () => {
  return (
    <div className="m-8">
      <video
        className="object-cover rounded-3xl outline-none border-none"
        autoPlay
        loop
        muted
        playsInline
        src="/video.mp4"
      ></video>
    </div>
  );
};
export default Vidio;
