import React, { useState } from 'react';
import Headline from './Headline';
import Time from './Time';
import Window from './Window';

const Taskbar = ({ headlines }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const [showHeadline, setShowHeadline] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleFileExplorerClick = () => {
    setShowWindow(true);
    setShowHeadline(false);
  };

  const handleNewsClick = () => {
    setShowWindow(true);
    setShowHeadline(true);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
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
          className="file-explorer-button flex items-center bg-gray-400 rounded-lg border-black h-10 px-1 shadow"
          onClick={handleFileExplorerClick}
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
      <Time />
      {showWindow && (
        <div className="small-window absolute bottom-16 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-white shadow-lg border border-gray-300 rounded-lg">
          {showHeadline ? (
            <>
              <Headline headlines={headlines} />
            </>
          ) : (
            <>
              <Window />
              <div className="notes-app p-2">
                <h2 className="text-lg font-bold mb-2">Notes</h2>
                <div className="notes-list mb-2">
                  {notes.map((note, index) => (
                    <div key={index} className="note-item flex justify-between items-center bg-gray-100 p-1 mb-1 rounded">
                      <span>{note}</span>
                      <button
                        className="delete-note bg-red-500 text-white rounded px-2"
                        onClick={() => handleDeleteNote(index)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
                <div className="add-note flex">
                  <input
                    type="text"
                    className="note-input flex-1 border border-gray-300 rounded p-1"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                  />
                  <button
                    className="add-note-button bg-blue-500 text-white rounded px-2 ml-2"
                    onClick={handleAddNote}
                  >
                    Add
                  </button>
                </div>
              </div>
            </>
          )}
          <button
            className="close-button absolute top-1 right-1 bg-gray-300 rounded-full px-2"
            onClick={() => setShowWindow(false)}
          >
            X
          </button>
        </div>
      )}
    </span>
  );
};

export default Taskbar;