import React from 'react';
import './invert.css'

function Invert() {
  const toggleInverse = () => {
    document.documentElement.classList.toggle('inversed');
  };

  return (
    <div className='invert-container'>
    <button className="inverseColour" onClick={toggleInverse}>
      Inverse Colour
    </button>
    </div>
  
  );
}

export default Invert;
