import React, { useState } from 'react';
import Headline from './Headline';
import Time from './Time';
import Notes from './Notes';
import FileExplorer from './FileExplorer';

const Taskbar = ({ onFileExplorerClick, headlines }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const [showHeadline, setShowHeadline] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showFileExplorer, setShowFileExplorer] = useState(false);

  const handleNotesClick = () => {
    setShowWindow(false);
    setShowHeadline(false);
    setShowFileExplorer(false);
    setShowNotes(true);
  };

  const handleNewsClick = () => {
    setShowWindow(true);
    setShowHeadline(true);
    setShowFileExplorer(false);
    setShowNotes(false);
  };

  const handleFileExplorerClick = () => {
    setShowWindow(false);
    setShowHeadline(false);
    setShowNotes(false);
    setShowFileExplorer(true);
    onFileExplorerClick(); // Trigger the file explorer click handler passed from App.jsx
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <span className="taskbar fixed bottom-0 left-0 w-full h-12 bg-gray-200 flex items-center px-2 shadow-lg">
      <div className="Start">
        <button
          onClick={toggleMenu}
          className="start-button flex items-center bg-gray-400 rounded-lg border-black h-10 px-2 shadow"
        >
          <img src="/windowstart.png" alt="Start" className="mr-2 w-6" />
          <span style={{ color: 'black' }}>Start</span>
        </button>
        {menuVisible && (
          <div className="menu absolute bottom-12 left-0 w-48 bg-white shadow-lg border border-gray-300 rounded-lg">
            <ul>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Menu Item 1</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Menu Item 2</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Menu Item 3</li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center ml-2">
        <button
          className="notes-button flex items-center bg-gray-400 rounded-lg border-black h-10 px-1 shadow"
          onClick={handleNotesClick}
        >
          <img src="/notes.png" alt="Notes" className="mr-2 w-6" />
        </button>
      </div>
      <div className="flex items-center ml-2">
        <button
          className="news-button flex items-center bg-gray-400 rounded-lg border-black h-10 px-1 shadow"
          onClick={handleNewsClick}
        >
          <img src="/news.png" alt="News" className="mr-2 w-6" />
        </button>
      </div>
      <div className="flex items-center ml-2">
        <button
          className="file-explorer-button flex items-center bg-gray-400 rounded-lg border-black h-10 px-1 shadow"
          onClick={handleFileExplorerClick}
        >
          <img src="/fileexplorer.png" alt="File Explorer" className="mr-2 w-6" />
        </button>
      </div>
      <Time />
      {showWindow && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-96 h-96 bg-white shadow-lg border border-gray-300 rounded-lg relative">
            {showHeadline ? (
              <Headline headlines={headlines} />
            ) : (
              <Window defaultApp="C:\\" />
            )}
            <button
              className="close-button absolute top-1 right-1 bg-gray-300 rounded-full px-2"
              onClick={() => setShowWindow(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {showNotes && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-96 h-96 bg-white shadow-lg border border-gray-300 rounded-lg relative">
            <Notes />
            <button
              className="close-button absolute top-1 right-1 bg-gray-300 rounded-full px-2"
              onClick={() => setShowNotes(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {showFileExplorer && <FileExplorer onClose={() => setShowFileExplorer(false)} />}
    </span>
  );
};

export default Taskbar;