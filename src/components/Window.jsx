import React, { useState, useEffect, useRef } from 'react';

const Window = ({ show, onClose, defaultApp = 'C:\\' }) => {
  const [showContacts, setShowContacts] = useState(false);
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showDesktop, setShowDesktop] = useState(false);
  const [address, setAddress] = useState(defaultApp);
  const [folderContent, setFolderContent] = useState([]);
  const windowRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (show) {
      switch (defaultApp) {
        case 'contacts':
          setShowContacts(true);
          setShowProjectInfo(false);
          setShowServices(false);
          setShowMusic(false);
          setShowDesktop(false);
          setAddress('contacts');
          break;
        case 'project':
          setShowProjectInfo(true);
          setShowContacts(false);
          setShowServices(false);
          setShowMusic(false);
          setShowDesktop(false);
          setAddress('project');
          break;
        case 'services':
          setShowServices(true);
          setShowContacts(false);
          setShowProjectInfo(false);
          setShowMusic(false);
          setShowDesktop(false);
          setAddress('services');
          break;
        case 'music':
          setShowMusic(true);
          setShowContacts(false);
          setShowProjectInfo(false);
          setShowServices(false);
          setShowDesktop(false);
          setAddress('music');
          break;
        case 'desktop':
          setShowDesktop(true);
          setShowContacts(false);
          setShowProjectInfo(false);
          setShowServices(false);
          setShowMusic(false);
          setAddress('desktop');
          break;
        default:
          setShowContacts(false);
          setShowProjectInfo(false);
          setShowServices(false);
          setShowMusic(false);
          setShowDesktop(false);
          setAddress('C:\\');
          setFolderContent(getQuickAccessContent());
          break;
      }
    }
  }, [show, defaultApp]);

  const getQuickAccessContent = () => {
    return [
      { name: 'Desktop', icon: 'folder.png', onClick: handleDesktopClick },
      { name: 'Documents', icon: 'folder.png' },
      { name: 'Pictures', icon: 'folder.png' },
    ];
  };

  const handleContactClick = () => {
    setShowContacts(true);
    setShowProjectInfo(false);
    setShowServices(false);
    setShowMusic(false);
    setShowDesktop(false);
    setAddress('contacts');
  };

  const handleProjectClick = () => {
    setShowProjectInfo(true);
    setShowContacts(false);
    setShowServices(false);
    setShowMusic(false);
    setShowDesktop(false);
    setAddress('project');
  };

  const handleServicesClick = () => {
    setShowServices(true);
    setShowContacts(false);
    setShowProjectInfo(false);
    setShowMusic(false);
    setShowDesktop(false);
    setAddress('services');
  };

  const handleMusicClick = () => {
    setShowMusic(true);
    setShowContacts(false);
    setShowProjectInfo(false);
    setShowServices(false);
    setShowDesktop(false);
    setAddress('music');
  };

  const handleDesktopClick = () => {
    setShowDesktop(true);
    setShowContacts(false);
    setShowProjectInfo(false);
    setShowServices(false);
    setShowMusic(false);
    setAddress('desktop');
  };

  const handleMouseDown = (e) => {
    if (e.target.classList.contains('draggable')) {
      setIsDragging(true);
      const rect = windowRef.current.getBoundingClientRect();
      setDragStart({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setDragOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleGoClick = () => {
    // Simulate folder content fetching based on address
    if (address === 'C:\\') {
      setFolderContent([
        { name: 'Documents and Settings', icon: 'folder.png' },
        { name: 'Program Files', icon: 'folder.png' },
        { name: 'WINDOWS', icon: 'folder.png' },
      ]);
    } else if (address.toLowerCase() === 'contacts') {
      setShowContacts(true);
      setShowProjectInfo(false);
      setShowServices(false);
      setShowMusic(false);
      setShowDesktop(false);
    } else if (address.toLowerCase() === 'project') {
      setShowProjectInfo(true);
      setShowContacts(false);
      setShowServices(false);
      setShowMusic(false);
      setShowDesktop(false);
    } else if (address.toLowerCase() === 'services') {
      setShowServices(true);
      setShowContacts(false);
      setShowProjectInfo(false);
      setShowMusic(false);
      setShowDesktop(false);
    } else if (address.toLowerCase() === 'music') {
      setShowMusic(true);
      setShowContacts(false);
      setShowProjectInfo(false);
      setShowServices(false);
      setShowDesktop(false);
    } else if (address.toLowerCase() === 'desktop') {
      setShowDesktop(true);
      setShowContacts(false);
      setShowProjectInfo(false);
      setShowServices(false);
      setShowMusic(false);
    } else {
      setFolderContent([]);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div
        ref={windowRef}
        className="w-full max-w-4xl mx-auto mt-10 bg-gray-100 border border-gray-300 shadow-lg absolute"
        style={{ top: `${dragOffset.y}px`, left: `${dragOffset.x}px` }}
        onMouseDown={(e) => e.stopPropagation()} // Prevent dragging the window when clicking inside it
      >
        <div
          className="bg-gray-200 border-b border-gray-300 p-2 flex items-center justify-between cursor-move draggable"
          onMouseDown={handleMouseDown}
        >
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
              <li className="mb-2 cursor-pointer text-blue-500" onClick={handleDesktopClick}><span className="font-semibold">Desktop</span></li>
              <li className="mb-2"><span className="font-semibold">My Documents</span></li>
              <li className="mb-2"><span className="font-semibold">My Computer</span></li>
              <ul className="ml-4">
                <li className="mb-2">Local Disk (C:)</li>
                <li className="mb-2">Control Panel</li>
                <li className="mb-2 cursor-pointer text-blue-500" onClick={handleProjectClick}>Project</li>
                <li className="mb-2 cursor-pointer text-blue-500" onClick={handleContactClick}>Contacts</li>
                <li className="mb-2 cursor-pointer text-blue-500" onClick={handleServicesClick}>Services</li>
              </ul>
              <li className="mb-2"><span className="font-semibold">My Network Places</span></li>
              <li className="mb-2"><span className="font-semibold">Recycle Bin</span></li>
            </ul>
          </div>
          <div className="flex-grow p-2">
            <div className="bg-white border border-gray-            300 p-2 mb-2">
              <div className="flex items-center mb-2">
                <div className="flex-grow text-left text-sm">
                  Address: 
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="ml-2 p-1 border border-gray-300 rounded"
                  />
                </div>
                <button className="bg-gray-300 p-1 rounded-full" onClick={handleGoClick}>Go</button>
              </div>
              <div className="flex space-x-4">
                <div className="text-sm cursor-pointer">Back</div>
                <div className="text-sm cursor-pointer">Search</div>
                <div className="text-sm cursor-pointer">Folders</div>
              </div>
            </div>
            <div className="bg-white border border-gray-300 p-2">
              {showContacts ? (
                <ul>
                  <li className="mb-2">Email: myleskmiller@gmail.com</li>
                  <p className="text-sm m-0"><a href="https://www.linkedin.com/in/myles-miller-669516263/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                  <li className="mb-2">Phone number: 678-559-2304</li>
                </ul>
              ) : showProjectInfo ? (
                <div>
                  <h2 className="font-bold text-lg mb-2">Projects</h2>
                  <menu> 
                    <a href="https://ozemoya.github.io/tictactoe/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline mb-2">Tic-Tac-Toe</a>
                    <a href="https://ozemoya.github.io/investment-project/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline mb-2">Investment Project</a>
                  </menu>
                </div>
              ) : showServices ? (
                <div>
                  <h2 className="font-bold text-lg mb-2">Services</h2>
                  <ul>
                    <li className="mb-2">Service 1: Soon :)</li>
                    <li className="mb-2">Service 2: Soon :)</li>
                    <li className="mb-2">Service 3: Soon :)</li>
                  </ul>
                </div>
              ) : showMusic ? (
                <div>
                  <h2 className="font-bold text-lg mb-2">Music</h2>
                  <ul>
                    <li className="mb-2">Song 1: Example Song 1</li>
                    <li className="mb-2">Song 2: Example Song 2</li>
                    <li className="mb-2">Song 3: Example Song 3</li>
                  </ul>
                </div>
              ) : showDesktop ? (
                <div>
                  <h2 className="font-bold text-lg mb-2">Desktop</h2>
                  <ul>
                    <li className="mb-2 cursor-pointer text-blue-500" onClick={handleProjectClick}>Projects</li>
                    <li className="mb-2 cursor-pointer text-blue-500" onClick={handleServicesClick}>Services</li>
                    <li className="mb-2 cursor-pointer text-blue-500" onClick={handleContactClick}>Contacts</li>
                  </ul>
                </div>
              ) : (
                <div>
                  <h2 className="font-bold text-lg mb-2">Quick Access</h2>
                  <ul>
                    {folderContent.map((item, index) => (
                      <li key={index} className="mb-2 cursor-pointer text-blue-500" onClick={item.onClick || null}>
                        <img src={item.icon} alt="Folder Icon" className="inline-block mr-2" />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                  <h3 className="font-bold text-lg mt-4 mb-2">Recent</h3>
                  <ul>
                    <li className="mb-2">new folder icons</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;