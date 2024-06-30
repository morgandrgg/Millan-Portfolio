import React from "react";

const PhotoMenuButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-transparent py-8 space-y-2 text-white">
      <div id="photo-menu" className="text-center">
        {/* <p>Welcome to my photography portfolio.</p>
        <p>
          Drag, scroll, or click the elements above.{" "}
          <i id="pause-button" className="fas fa-pause"></i>
        </p> */}
        <div className="space-x-4 mt-4">
          <button
            id="sphere"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            SPHERE
          </button>
          <button
            id="helix"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            HELIX
          </button>
          <button
            id="grid"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            GRID
          </button>
          <button
            id="table"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            TABLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoMenuButton;
