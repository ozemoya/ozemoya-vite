import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = ({ show, onClose }) => {
  const [url, setUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(true);
  const [songTitle, setSongTitle] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLooping;
    }
  }, [isLooping]);

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
    const videoID = extractVideoID(url);
    if (videoID) {
      const embedUrl = `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=${isLooping ? 1 : 0}&playlist=${videoID}`;
      audioRef.current.src = embedUrl;
      audioRef.current.play();
      setIsPlaying(true);
      fetchSongTitle(videoID);
    } else {
      console.error('Invalid YouTube URL');
    }
  };

  const extractVideoID = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  const fetchSongTitle = async (videoID) => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=AIzaSyBD-V6B4AE60HONx9PxBa_V6sDKMIvA3_c`);
      const data = await response.json();
      setSongTitle(data.items[0].snippet.title);
    } catch (error) {
      console.error('Error fetching song title:', error);
    }
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  return (
    <>
      {show && (
        <div className="fixed bottom-5 left-0 w-full bg-gray-800 text-white p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input 
                type="text" 
                value={url} 
                onChange={handleUrlChange} 
                className="mr-4 p-2 text-black"
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
              <button onClick={toggleLoop} className={`ml-4 ${isLooping ? 'bg-yellow-500' : 'bg-gray-500'} hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded`}>
                {isLooping ? 'Loop On' : 'Loop Off'}
              </button>
            </div>
          </div>
          <div className="text-center mt-4">
            {songTitle && <h3 className="text-lg font-bold">{songTitle}</h3>}
          </div>
        </div>
      )}
      <iframe
        ref={audioRef}
        className="hidden"
        width="0"
        height="0"
        frameBorder="0"
        allow="autoplay"
      ></iframe>
    </>
  );
};

export default MusicPlayer;