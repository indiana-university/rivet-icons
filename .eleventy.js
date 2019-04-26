const dirTree = require('directory-tree');

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection('icons', collection => {
    /**
     * Get all the files in the "./src/svg/" directory.
     */
    const svgFiles =
      dirTree('./src/svg', {extensions: /\.svg/}).children;
    
    /**
     * Return a new Array of the icon file names.
     * E.g. ['rvt-icon-alarm.svg', 'rvt-icon-arrow-down.svg', ...]
     */
    return svgFiles.map(file => file.name);
  });
  
  return {
    dir: {
      input: 'src',
      output: 'docs',
      includes: 'svg'
    }
  }
}