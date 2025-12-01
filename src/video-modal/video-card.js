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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5 3v18l15-9L5 3z" />
          </svg>
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
