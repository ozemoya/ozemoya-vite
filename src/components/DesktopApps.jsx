import React, { useEffect } from 'react';

const DesktopApps = ({ onContactsClick, onMusicClick, onProjectsClick, onServicesClick }) => {
  useEffect(() => {
    // Automatically click the contacts button when the component mounts
    document.getElementById('contacts').click();
  }, []);

  const handleClick = (id, onClick) => {
    document.getElementById(id).click();
    onClick();
  };

  return (
    <div className="absolute top-0 left-0 w-40 h-40">
      <section className="absolute top-8 left-0 flex flex-col items-start justify-evenly text-white mb-10 ml-8">
        <div
          id='projects'
          className="flex flex-col mb-2 transform transition-transform hover:-translate-y-1 cursor-pointer hover:bg-[rgba(104,76,76,0.4)] duration-500 py-2 rounded"
          onClick={() => handleClick('projects', onProjectsClick)}
        >
          <img src="/Projects.png" alt="Projects" className="w-30 p-5" />
          <p className="bg-[rgba(104,76,76,0.4)] font-['PixelOperatorMono'] mt-[-10px]">
            Projects
          </p>
        </div>
        <div
          id='services'
          className="flex flex-col mb-2 transform transition-transform hover:-translate-y-1 cursor-pointer hover:bg-[rgba(104,76,76,0.4)] duration-500 py-2 rounded"
          onClick={() => handleClick('services', onServicesClick)}
        >
          <img src="/Services.png" alt="Services" className="w-30 p-5" />
          <p className="bg-[rgba(104,76,76,0.4)] font-['PixelOperatorMono'] mt-[-10px]">
            Services
          </p>
        </div>
        <div
          id='contacts'
          className="flex flex-col mb-2 transform transition-transform hover:-translate-y-1 cursor-pointer hover:bg-[rgba(104,76,76,0.4)] duration-500 py-2 rounded"
          onClick={() => handleClick('contacts', onContactsClick)}
        >
          <img src="/Contacts.png" alt="Contacts" className="w-30 p-5" />
          <p className="bg-[rgba(104,76,76,0.4)] font-['PixelOperatorMono'] mt-[-10px]">
            Contacts
          </p>
        </div>
        <div
          id='music'
          className="flex flex-col mb-2 transform transition-transform hover:-translate-y-1 cursor-pointer hover:bg-[rgba(104,76,76,0.4)] duration-500 py-2 rounded"
          onClick={() => handleClick('music', onMusicClick)}
        >
          <img src="/Music.png" alt="Music" className="w-30 p-5" />
          <p className="bg-[rgba(104,76,76,0.4)] font-['PixelOperatorMono'] mt-[-10px]">
            Music
          </p>
        </div>
      </section>
    </div>
  );
};

export default DesktopApps;