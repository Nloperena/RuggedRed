import { useMemo } from 'react';
import { transformText } from '../utils/textTransform';

export const useTextTransform = (format = 'separate') => {
  return useMemo(() => ({
    transform: (text) => transformText(text, format),
    format
  }), [format]);
}; 