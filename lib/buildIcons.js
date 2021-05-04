/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const { buildClipPath } = require('./buildClipPath.js')
const { buildSet } = require('./buildSet.js')
const { buildSprite } = require('./buildSprite.js')
const { buildStyles } = require('./buildStyles.js')
const { noop } = require('./lib.js')

const buildFns = {
  css: buildStyles,
  html: buildClipPath,
  js: buildSet,
  svg: buildSprite
}

async function buildIcons (options = {}) {
  const { type } = options
  const fn = buildFns[type] || noop
  return fn(options)
}

module.exports = {
  buildIcons
}
