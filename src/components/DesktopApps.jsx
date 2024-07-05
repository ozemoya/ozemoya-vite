import React, { useState } from 'react';
import Window from './Window';

const DesktopApps = () => {
  const [showWindow, setShowWindow] = useState(false);
  const [defaultApp, setDefaultApp] = useState('C:\\');

  const changeApp = (app) => {
    setDefaultApp(app);
    setShowWindow(true);
  };

  return (
    <div>
      <div className="absolute top-0 left-0 w-40 h-40">
        <section className="absolute top-8 left-0 flex flex-col items-start justify-evenly text-white mb-10 ml-8">
          <div
            id='projects'
            className="flex flex-col mb-2 transform transition-transform hover:-translate-y-1 cursor-pointer hover:bg-[rgba(104,76,76,0.4)] duration-500 py-2 rounded"
            onClick={() => changeApp('project')}
          >
            <img src="/Projects.png" alt="Projects" className="w-30 p-5" />
            <p className="bg-[rgba(104,76,76,0.4)] font-['PixelOperatorMono'] mt-[-10px]">
              Projects
            </p>
          </div>
          <div
            id='services'
            className="flex flex-col mb-2 transform transition-transform hover:-translate-y-1 cursor-pointer hover:bg-[rgba(104,76,76,0.4)] duration-500 py-2 rounded"
            onClick={() => changeApp('services')}
          >
            <img src="/Services.png" alt="Services" className="w-30 p-5" />
            <p className="bg-[rgba(104,76,76,0.4)] font-['PixelOperatorMono'] mt-[-10px]">
              Services
            </p>
          </div>
          <div
            id='contacts'
            className="flex flex-col mb-2 transform transition-transform hover:-translate-y-1 cursor-pointer hover:bg-[rgba(104,76,76,0.4)] duration-500 py-2 rounded"
            onClick={() => changeApp('contacts')}
          >
            <img src="/Contacts.png" alt="Contacts" className="w-30 p-5" />
            <p className="bg-[rgba(104,76,76,0.4)] font-['PixelOperatorMono'] mt-[-10px]">
              Contacts
            </p>
          </div>
          <div
            id='music'
            className="flex flex-col mb-2 transform transition-transform hover:-translate-y-1 cursor-pointer hover:bg-[rgba(104,76,76,0.4)] duration-500 py-2 rounded"
            onClick={() => changeApp('music')}
          >
            <img src="/Music.png" alt="Music" className="w-30 p-5" />
            <p className="bg-[rgba(104,76,76,0.4)] font-['PixelOperatorMono'] mt-[-10px]">
              Music
            </p>
          </div>
        </section>
      </div>
      <Window show={showWindow} onClose={() => setShowWindow(false)} defaultApp={defaultApp} />
    </div>
  );
};

export default DesktopApps;