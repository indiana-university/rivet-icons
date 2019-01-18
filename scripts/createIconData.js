const dirTree = require('directory-tree');
const fs = require('fs');

// Get all the files in the "svg" directory
const tree = dirTree('./src/svg', {extensions: /\.svg/});

// Filter out just the array of file objects
const icons = tree.children;

// Create the JSON file in the _data directory for Eleventy to use
fs.writeFileSync('./src/_data/icons.json', JSON.stringify(icons));