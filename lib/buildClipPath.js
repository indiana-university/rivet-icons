/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const path = require('path')
const SVGSpriter = require('svg-sprite')
const { ICON_PREFIX } = require('./constants.js')
const { compileSpriter, readIcons } = require('./lib.js')

async function buildClipPath (options = {}) {
  const {
    out = null
  } = options
  const prefix = ICON_PREFIX
  const spriter = new SVGSpriter({
    shape: {
      id: {
        generator: `${prefix}-`
      }
    },
    mode: {
      symbol: true
    }
  })
  const icons = await readIcons({
    ...options,
    process: async (icon) => {
      const { filePath, source } = icon
      spriter.add(filePath, null, source)
      return icon
    }
  })
  
  const result = await compileSpriter(spriter)
  const { sprite } = result.symbol
  const svg = sprite.contents.toString('utf8')
    .replace(/<\?.+\?>/g, '')
    .replace(/ xmlns:xlink="[^"]+"/g, '')
    .replace(/ xmlns="[^"]+"/g, '')
    .replace(/symbol/g, 'clipPath')
    .replace(/ fill="[^"]+"/g, '')
    .replace(/ viewBox="[^"]+"/g, '')
    .replace(/<g>/g, '')
    .replace(/<\/g>/g, '')
    .replace(/<svg>/, '<svg viewBox="0 0 16 16" width="0" height="0"><defs>')
    .replace(/<\/svg>/, '</defs></svg>')

  const iconVars = icons
    .map(({ fullName }) => `  --${fullName}: url(#${fullName});`)
    .join('\n')
  const selectors = icons
    .map(({ fullName, shortName }) =>
`.${prefix}--${shortName},
[data-${prefix}="${shortName}"] {
  --${prefix}: var(--${fullName});
}`)
    .join('\n\n')

  const contents = `${svg}
<style>
:root {
${iconVars}
}

.${prefix},
[data-${prefix}] {
  display: inline-flex;
}

.${prefix}::before,
[data-${prefix}]::before {
  background-color: currentColor;
  clip-path: var(--${prefix});
  content: '';
  display: inline-block;
  height: 1rem;
  width: 1rem;
}

${selectors}
</style>
`

  if (out) {
    await fs.writeFile(path.resolve(out), contents)
  }

  return contents
}

module.exports = {
  buildClipPath
}
