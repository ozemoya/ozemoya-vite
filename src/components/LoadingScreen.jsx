import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-[rgb(228,113,56)] z-50 animate-fadeOut">
      <div className="headline-container w-2/5 text-left">
        <h1 className="text-4xl font-bold"></h1>
      </div>
      <div className="flex space-x-2 mt-5">
        <div className="dot w-5 h-5 bg-white rounded-full animate-[bounce_1.4s_infinite]"></div>
        <div className="dot w-5 h-5 bg-white rounded-full animate-[bounce_1.4s_infinite_0.2s]"></div>
        <div className="dot w-5 h-5 bg-white rounded-full animate-[bounce_1.4s_infinite_0.4s]"></div>
      </div>
      <span className="catdance absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <img src="/catdancegif.gif" alt="Loading" />
      </span>
    </div>
  );
};

export default LoadingScreen;