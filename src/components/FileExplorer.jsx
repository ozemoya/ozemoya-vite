import React, { useState } from 'react';

const FileExplorer = ({ onClose }) => {
  const [showWindow, setShowWindow] = useState(false);

  return (
    <>
      {showWindow && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-96 h-96 bg-white shadow-lg border border-gray-300 rounded-lg relative">
            <Window defaultApp="C:\\" />
            <button
              className="close-button absolute top-1 right-1 bg-gray-300 rounded-full px-2"
              onClick={() => {
                setShowWindow(false);
                onClose();
              }}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FileExplorer;