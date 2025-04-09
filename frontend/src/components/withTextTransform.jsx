import React from 'react';
import { transformText } from '../utils/textTransform';

const withTextTransform = (WrappedComponent, format = 'separate') => {
  return (props) => {
    const transformProps = (props) => {
      const newProps = { ...props };
      
      // Transform string props
      Object.keys(newProps).forEach(key => {
        if (typeof newProps[key] === 'string') {
          newProps[key] = transformText(newProps[key], format);
        }
      });

      // Transform children if they are strings
      if (typeof newProps.children === 'string') {
        newProps.children = transformText(newProps.children, format);
      }

      return newProps;
    };

    return <WrappedComponent {...transformProps(props)} />;
  };
};

export default withTextTransform; 