import React, { useState, useEffect } from 'react';

const Window = ({ show, onClose }) => {
  const [showContacts, setShowContacts] = useState(false);
  const [showProjectInfo, setShowProjectInfo] = useState(false);

  useEffect(() => {
    if (show) {
      setShowContacts(false);
      setShowProjectInfo(false);
    }
  }, [show]);

  if (!show) return null;

  const handleContactClick = () => {
    setShowContacts(!showContacts);
    setShowProjectInfo(false);
  };

  const handleProjectClick = () => {
    setShowProjectInfo(!showProjectInfo);
    setShowContacts(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto mt-10 bg-gray-100 border border-gray-300 shadow-lg">
        <div className="bg-gray-200 border-b border-gray-300 p-2 flex items-center justify-between">
          <div className="text-left font-bold text-sm">Local Disk (C:)</div>
          <div className="flex space-x-2">
            <button className="bg-gray-300 p-1 rounded-full">_</button>
            <button className="bg-gray-300 p-1 rounded-full">☐</button>
            <button className="bg-gray-300 p-1 rounded-full" onClick={onClose}>X</button>
          </div>
        </div>
        <div className="flex">
          <div className="bg-gray-200 w-48 border-r border-gray-300 p-2">
            <div className="mb-2 font-bold">Folders</div>
            <ul>
              <li className="mb-2"><span className="font-semibold">Desktop</span></li>
              <li className="mb-2"><span className="font-semibold">My Documents</span></li>
              <li className="mb-2"><span className="font-semibold">My Computer</span></li>
              <ul className="ml-4">
                <li className="mb-2">Local Disk (C:)</li>
                <li className="mb-2">Control Panel</li>
                <li className="mb-2 cursor-pointer text-blue-500" onClick={handleProjectClick}>Project</li>
<li className="mb-2 cursor-pointer text-blue-500" onClick={handleContactClick}>Contacts</li>
                <li className="mb-2">Services</li>
              </ul>
              <li className="mb-2"><span className="font-semibold">My Network Places</span></li>
              <li className="mb-2"><span className="font-semibold">Recycle Bin</span></li>
            </ul>
          </div>
          <div className="flex-grow p-2">
            <div className="bg-white border border-gray-300 p-2 mb-2">
              <div className="flex items-center mb-2">
                <div className="flex-grow text-left text-sm">Address: C:\</div>
                <button className="bg-gray-300 p-1 rounded-full">Go</button>
              </div>
              <div className="flex space-x-4">
                <div className="text-sm">Back</div>
                <div className="text-sm">Search</div>
                <div className="text-sm">Folders</div>
              </div>
            </div>
            <div className="bg-white border border-gray-300 p-2">
              {showContacts ? (
                <ul>
                  <li className="mb-2">Email: myleskmiller@gmail.com</li>
                  <p className="text-sm m-0"><a href="https://www.linkedin.com/in/myles-miller-669516263/">LinkedIn</a></p>
                  <li className="mb-2">Phone number: 678-559-2304</li>
                </ul>
              ) : showProjectInfo ? (
                <div>
                  <h2 className="font-bold text-lg mb-2">Project Information</h2>
                  <p className="text-sm mb-2">This is a sample project information.</p>
                </div>
              ) : (
                <ul>
                  <li className="mb-2"><img src="folder.png" alt="Folder Icon" className="inline-block mr-2" /> Documents and Settings</li>
                  <li className="mb-2"><img src="folder.png" alt="Folder Icon" className="inline-block mr-2" /> Program Files</li>
                  <li className="mb-2"><img src="folder.png" alt="Folder Icon" className="inline-block mr-2" /> WINDOWS</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;