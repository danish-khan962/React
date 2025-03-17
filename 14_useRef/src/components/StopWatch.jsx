import React, { useState, useEffect, useRef } from 'react';

const StopWatch = () => {
  const [timeCount, setTimeCount] = useState(0);
  const timeRef = useRef(null);

  const handleStart = () => {
    timeRef.current = setInterval(() => {
      setTimeCount(prevTimeCount => prevTimeCount + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timeRef.current);
  };

  const handleReset = () => {
    handleStop();
    setTimeCount(0);
  };

  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <p style={{ fontSize: '45px' }}>StopWatch: {timeCount}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button onClick={handleStart} style={{ fontSize: '30px' }}>START</button>
        <button onClick={handleStop} style={{ fontSize: '30px' }}>STOP</button>
        <button onClick={handleReset} style={{ fontSize: '30px' }}>RESET</button>
      </div>
    </div>
  );
};

export default StopWatch;
