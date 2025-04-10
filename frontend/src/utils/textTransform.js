// Function to convert RuggedRed to RUGGED RED
export const separateUppercase = (text) => {
  return text.replace(/RuggedRed/g, 'RUGGED RED');
};

// Function to convert Rugged Red to RUGGED RED
export const combineSpaced = (text) => {
  return text.replace(/Rugged\s+Red/g, 'RUGGED RED');
};

// Function to apply both transformations based on context
export const transformText = (text, format = 'separate') => {
  if (format === 'separate') {
    return separateUppercase(text);
  } else if (format === 'combine') {
    return combineSpaced(text);
  }
  return text;
}; 