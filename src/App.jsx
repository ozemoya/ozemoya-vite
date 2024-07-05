import React, { useEffect, useState } from "react";
import './tailwind.css'; // Import Tailwind CSS
import DesktopApps from "./components/DesktopApps";
import Window from "./components/Window";
import MusicPlayer from "./components/MusicPlayer";
import Taskbar from "./components/Taskbar";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [showWindow, setShowWindow] = useState(false);
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = '3702918983a4465894f86153fcaabf02'; // Replace with your actual API key
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setHeadlines(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        document.body.style.display = 'none';
      } else {
        document.body.style.display = 'block';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-ozemoyalogo bg-cover bg-custom-size bg-no-repeat bg-fixed bg-[position:200px_50px] h-screen w-full bg-customColor">

        <div className="flex items-center space-x-6">
          <div className="flex-shrink-0">
           
          
        </div>
      </div>
      <DesktopApps 
        onContactsClick={() => setShowWindow(true)}
        onMusicClick={() => setShowMusicPlayer(true)}
        onProjectsClick={() => setShowWindow(true)}
        onServicesClick={() => setShowWindow(true)}
      />
      <Window show={showWindow} onClose={() => setShowWindow(false)} />
      <MusicPlayer show={showMusicPlayer} onClose={() => setShowMusicPlayer(false)} />
      <Taskbar headlines={headlines} />
      <LoadingScreen />
    </div>
  );
};

export default App;