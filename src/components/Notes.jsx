import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

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
  );
};

export default Notes;