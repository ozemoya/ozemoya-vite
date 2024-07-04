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

  return (
    <div className="ticker-wrap">
      <div ></div>
      <div id="headline" className="animated-headline text-black ml-4">
        {headlines.length > 0 && headlines[currentHeadline]?.title}
      </div>
    </div>
  );
};

export default Headline;