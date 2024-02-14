import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const GamePage = () => {
  const [balloonSize, setBalloonSize] = useState(0);
  const [popped, setPopped] = useState(false);
  const pumpButtonRef = useRef(null);

  const handlePump = () => {
    if (!popped) {
      setBalloonSize((prevSize) => prevSize + 1);
    }
  };

  useEffect(() => {
    if (balloonSize >= 10) {
      setPopped(true);
      alert('Balloon Popped!');
    }
  }, [balloonSize]);

  return (
    <div className="game-container">
      <h2>Game Page</h2>
      <div
        className={`balloon ${popped ? 'popped' : ''}`}
        style={{
          backgroundColor: popped ? 'Red' : 'yellow',
          height: `${balloonSize * 10}px`,
          width: `${balloonSize * 10}px`,
        }}
      ></div>
      <p>Balloon Size: {balloonSize}</p>
      <button ref={pumpButtonRef} onClick={handlePump} disabled={popped}>
        Pump Balloon
      </button>
    </div>
  );
};

export default GamePage;
