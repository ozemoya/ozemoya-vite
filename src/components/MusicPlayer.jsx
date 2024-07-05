import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';

const MusicPlayer = ({ show, onClose }) => {
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const playerRef = useRef(null);

  const extractVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|youtu.be\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handlePlay = () => {
    const id = extractVideoId(url);
    if (id) {
      setVideoId(id);
    } else {
      alert('Invalid YouTube URL');
    }
  };

  const handleStop = () => {
    if (playerRef.current) {
      playerRef.current.stopVideo();
      setVideoId('');
    }
  };

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  const onEnd = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const onStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      const player = playerRef.current;
      const iframe = player.getIframe();
      iframe.style.visibility = 'hidden';
      iframe.style.height = '0';
    }
  };

  return (
    <div className={`fixed inset-0 ${show ? 'flex' : 'hidden'} justify-center items-center`}>
      <div className="w-full max-w-lg mx-auto mt-10 bg-white border border-gray-300 shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">YouTube Music Player</h2>
          <button onClick={onClose} className="text-red-500">X</button>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <div className="flex space-x-2">
            <button onClick={handlePlay} className="bg-blue-500 text-white p-2 rounded">Play</button>
            <button onClick={handleStop} className="bg-red-500 text-white p-2 rounded">Stop</button>
          </div>
          {videoId && (
            <YouTube
              videoId={videoId}
              onReady={onReady}
              onEnd={onEnd}
              onStateChange={onStateChange}
              opts={{
                playerVars: {
                  autoplay: 1,
                  loop: 1,
                  playlist: videoId, // Required for looping
                },
              }}
              className="hidden"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;