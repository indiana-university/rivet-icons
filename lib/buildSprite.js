/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const path = require('path')
const SVGSpriter = require('svg-sprite')
const { ICON_PREFIX } = require('./constants.js')
const { compileSpriter, readIcons } = require('./lib.js')

async function buildSprite (options = {}) {
  const {
    out = null
  } = options
  const spriter = new SVGSpriter({
    shape: {
      id: {
        generator: `${ICON_PREFIX}-`
      }
    },
    mode: {
      symbol: true
    }
  })
  await readIcons({
    ...options,
    process: async ({ filePath, source }) => {
      spriter.add(filePath, null, source)
    }
  })
  const result = await compileSpriter(spriter)
  const { sprite } = result.symbol

  if (out) {
    await fs.writeFile(path.resolve(out), sprite.contents)
  }

  return sprite.contents.toString('utf8')
}

module.exports = {
  buildSprite
}
