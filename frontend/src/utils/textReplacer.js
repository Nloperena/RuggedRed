const patterns = {
  uppercase: {
    find: /RuggedRed/g,
    replace: 'RuggedRed'
  },
  uppercaseSpaced: {
    find: /RuggedRed/g,
    replace: 'RuggedRed'
  },
  titleCase: {
    find: /Rugged\s+Red/g,
    replace: 'RuggedRed'
  },
  titleCaseCombined: {
    find: /RuggedRed/g,
    replace: 'RuggedRed'
  },
  lowerCase: {
    find: /rugged\s*red/gi,
    replace: 'RuggedRed'
  }
};

export const replaceTextInFile = (content) => {
  if (typeof content !== 'string') return content;
  
  let newContent = content;
  
  // Apply all patterns in sequence
  Object.values(patterns).forEach(pattern => {
    newContent = newContent.replace(pattern.find, pattern.replace);
  });
  
  return newContent;
};

export const getTextPatterns = () => patterns; 