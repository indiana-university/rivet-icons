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

function deleteGeneratedFiles() {
  return del('./dist/symbol/');
}

exports.buildSymbol = buildSymbol;

// Builds SVG sprite sheet
exports.build = series(
  buildSymbol,
  renameSymbol,
  deleteGeneratedFiles
);