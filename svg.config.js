/**
 * Instead of a glob, it is possible to add paths to individual svg files
 * in the svgFilePaths Array below. Do this if you would rather create
 * your own bundled SVG sprite sheet that includes only the icons you
 * need/want to use in your app.
*/
module.exports = {
  symbolFileName: 'rvt-icons',
  svgFilePaths: [
    './src/svg/**/*.svg'
  ]
};