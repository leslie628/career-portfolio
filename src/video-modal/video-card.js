import React, { useState } from "react";
import VideoModal from "./video-modal";

function VideoCard({ videoUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => setIsOpen(true)}
      >
      </div>

      {/* Video modal */}
      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoUrl={videoUrl}
      />
    </>
  );
}

export default VideoCard;
