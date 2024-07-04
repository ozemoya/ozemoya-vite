import React, { useEffect, useState } from 'react';

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className>
      <div id="DateTime" className="text-black flex flex-row absolute ml-0 bottom-1" style={{ fontSize: '30px', right: '3%' }}>
        <div className= "relative flex flex-row mr-10">{time.toLocaleDateString()}</div>
        <div>{time.toLocaleTimeString()}</div>
      </div>
    </div>
  );
};

export default Time;