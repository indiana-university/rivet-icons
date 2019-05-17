/*!
 * Copyright (C) 2019 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const { src, dest, series } = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');
const config = require('./svg.config');

function buildSymbol() {
  return src(config.svgFilePaths)
    .pipe(svgSprite({
      mode: {
        symbol: true
      }
    }))
    .pipe(dest('dist/'));
}

function renameSymbol() {
  return src('./dist/symbol/svg/sprite.symbol.svg')
    .pipe(rename(`${config.symbolFileName}.svg`))
    .pipe(dest('./dist'));
}

/**
 * Cleans up folders from svgSprite and moves a copy of rvt-icons.svg into
 * the docs folder to use with icon preview page.
 */
function buildFileStructure(callback) {
  del('./dist/symbol/');
  
  src(`./dist/${config.symbolFileName}.svg`)
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