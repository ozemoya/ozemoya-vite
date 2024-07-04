import React from 'react';
import Headline from './Headline';
import Time from './Time';

const Taskbar = ({ headlines }) => {
  return (
    <span className="taskbar fixed bottom-0 left-0 w-full h-12 bg-gray-200 flex items-center px-2 shadow-lg">
      <div className="Start">
        <button className="start-button flex items-center bg-gray-400 rounded-lg border-black h-10 px-2 shadow">
          <img src="/windowstart.png" alt="Start" className="mr-2 w-6" />
          <span style={{ color: 'black' }}>Start</span>
        </button>
      </div>
      <Time />
      <Headline headlines={headlines} />
    </span>
  );
};

export default Taskbar;