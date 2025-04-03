import React from 'react';

const ScrollLock = ({ children }) => {
  return (
    <div className="scroll-lock-container" style={{
      maxWidth: '100vw',
      overflowX: 'hidden',
      position: 'relative'
    }}>
      {children}
    </div>
  );
};

export default ScrollLock; 