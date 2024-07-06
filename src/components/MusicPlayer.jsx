import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = ({ show, onClose }) => {
  const [url, setUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
    }
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleLoad = () => {
    if (audioRef.current) {
      audioRef.current.src = `https://www.youtube.com/embed/${extractVideoID(url)}?autoplay=1`;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const extractVideoID = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  return (
    <div className={`fixed bottom-8 left-0 w-full bg-gray-800 text-white p-4 ${show ? 'block' : 'hidden'}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input 
            type="text" 
            value={url} 
            onChange={handleUrlChange} 
            className="mr-4 p-2 text-white bg-black"
            placeholder="Enter YouTube URL" 
          />
          <button onClick={handleLoad} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Load
          </button>
        </div>
        <div className="flex items-center">
          {isPlaying ? (
            <button onClick={handlePause} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Pause
            </button>
          ) : (
            <button onClick={handlePlay} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Play
            </button>
          )}
          <button onClick={onClose} className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
        </div>
      </div>
      <iframe
        ref={audioRef}
        className="hidden"
        width="0"
        height="0"
        frameBorder="0"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;