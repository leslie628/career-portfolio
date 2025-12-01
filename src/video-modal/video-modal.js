import React from "react";

function VideoModal({ isOpen, onClose, videoUrl }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={onClose}>
      {/* Modal content */}
      <div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2 relative" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-800 text-xl font-bold"
        >
          &times;
        </button>

        <div className="w-full pt-10 mx-auto rounded-lg aspect-video">
          <iframe
            src={videoUrl}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
