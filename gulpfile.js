const { src, dest, series } = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');

function buildSymbol() {
  return src('./src/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        symbol: true
      }
    }))
    .pipe(dest('dist/'));
}

function renameSymbol() {
  return src('./dist/symbol/svg/sprite.symbol.svg')
    .pipe(rename('rivet-icons.svg'))
    .pipe(dest('./dist'));
}

/**
 * Cleans up folders from svgSprite and moves a copy of rvt-icons.svg into
 * the docs folder to use with icon preview page.
 */
function buildFileStructure(callback) {
  del('./dist/symbol/');
  
  src('./dist/rivet-icons.svg')
    .pipe(dest('./docs/svg/'));
    
  src('./src/svg/**.svg')
    .pipe(dest('./dist/svgs/'));
  
  callback();
}

// Builds SVG sprite sheet
exports.build = series(
  buildSymbol,
  renameSymbol,
  buildFileStructure
);