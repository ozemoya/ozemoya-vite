import React from 'react';

const SpotifyPlayer = ({ show }) => {
  if (!show) return null;

  return (
    <div className="spotify-container fixed bottom-0 left-1/2 transform -translate-x-1/2">
      <iframe
        src="https://open.spotify.com/embed/album/1AJtMVPbKTiw7OHOa9oVCx?utm_source=generator"
        width="300"
        height="100"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;