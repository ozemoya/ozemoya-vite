import React, { useEffect, useState } from 'react';

const Headline = ({ headlines }) => {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    if (headlines.length > 0) {
      const tickerInterval = setInterval(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines.length);
      }, 10000);
      return () => clearInterval(tickerInterval);
    }
  }, [headlines]);

  const handleClick = () => {
    window.open(headlines[currentHeadline]?.url, '_blank');
  };

  return (
    <div className="ticker-wrap" style={{ display: 'flex', alignItems: 'center' }}>
      <div></div>
      <button 
        id="headline" 
        className="animated-headline text-black ml-4" 
        onClick={handleClick}
        style={{
          background: 'none',
          border: 'none',
          color: 'inherit',
          cursor: 'pointer',
          textAlign: 'left',
          padding: 0,
          font: 'inherit'
        }}
      >
        {headlines.length > 0 && headlines[currentHeadline]?.title}
      </button>
      
    </div>
  );
};

export default Headline;