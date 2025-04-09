import React from 'react';
import { replaceTextInFile } from '../utils/textReplacer';

const withGlobalTextTransform = (WrappedComponent) => {
  return (props) => {
    const transformProps = (props) => {
      const newProps = { ...props };
      
      // Transform all string props
      Object.keys(newProps).forEach(key => {
        if (typeof newProps[key] === 'string') {
          newProps[key] = replaceTextInFile(newProps[key]);
        }
      });

      // Transform children if they are strings
      if (typeof newProps.children === 'string') {
        newProps.children = replaceTextInFile(newProps.children);
      }

      return newProps;
    };

    return <WrappedComponent {...transformProps(props)} />;
  };
};

export default withGlobalTextTransform; 