import React from 'react';
import { useTextTransformContext } from '../context/TextTransformContext';

const TransformedText = ({ children, className = '', ...props }) => {
  const { textTransform } = useTextTransformContext();
  
  if (typeof children !== 'string') {
    return <span className={className} {...props}>{children}</span>;
  }

  return (
    <span className={className} {...props}>
      {textTransform.transform(children)}
    </span>
  );
};

export default TransformedText; 