import React from 'react';
import mascotImage from '../assets/RRMascot-smaller.png';
import './Mascot.css';

const Mascot = () => {
  return (
    <div className="mascot-divider">
      <img src={mascotImage} alt="Rugged Red Mascot" className="mascot-image" />
    </div>
  );
};

export default Mascot; 