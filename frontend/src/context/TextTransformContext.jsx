import React, { createContext, useContext, useState } from 'react';
import { useTextTransform } from '../hooks/useTextTransform';

const TextTransformContext = createContext();

export const TextTransformProvider = ({ children }) => {
  const [format, setFormat] = useState('separate');
  const textTransform = useTextTransform(format);

  return (
    <TextTransformContext.Provider value={{ textTransform, setFormat }}>
      {children}
    </TextTransformContext.Provider>
  );
};

export const useTextTransformContext = () => {
  const context = useContext(TextTransformContext);
  if (!context) {
    throw new Error('useTextTransformContext must be used within a TextTransformProvider');
  }
  return context;
}; 