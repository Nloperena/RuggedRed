// Function to convert RuggedRed to RuggedRed
export const separateUppercase = (text) => {
  return text.replace(/RuggedRed/g, 'RuggedRed');
};

// Function to convert RuggedRed to RuggedRed
export const combineSpaced = (text) => {
  return text.replace(/Rugged\s+Red/g, 'RuggedRed');
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