const fs = require('fs');
const path = require('path');

const patterns = {
  uppercase: {
    find: /RUGGEDRED/g,
    replace: 'RUGGED RED'
  },
  uppercaseSpaced: {
    find: /RUGGED RED/g,
    replace: 'RUGGED RED'
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

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // Apply all patterns in sequence
  Object.values(patterns).forEach(pattern => {
    newContent = newContent.replace(pattern.find, pattern.replace);
  });

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !filePath.includes('node_modules')) {
      processDirectory(filePath);
    } else if (
      file.endsWith('.js') || 
      file.endsWith('.jsx') || 
      file.endsWith('.ts') || 
      file.endsWith('.tsx') ||
      file.endsWith('.html') ||
      file.endsWith('.css')
    ) {
      processFile(filePath);
    }
  });
}

// Start processing from the src directory
const srcDir = path.join(__dirname, '../src');
processDirectory(srcDir);

console.log('Text transformation complete!'); 