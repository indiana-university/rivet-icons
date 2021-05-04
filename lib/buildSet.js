/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const path = require('path')
const SVGSpriter = require('svg-sprite')
const { ICON_PREFIX } = require('./constants.js')
const { compileSpriter, readIcons } = require('./lib.js')

async function buildSet (options = {}) {
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

  const js = await fs.readFile(path.resolve(__dirname, './rivet-icon.js'))

  const allSymbols = icons
    .map(({ fullName, shortName }) =>
      `<use href="#${fullName}" style="opacity: max(0, min(var(--${prefix}), var(--${shortName})) - max(var(--${prefix}), var(--${shortName})) + 1)"></use>`
    )
    .join('')
  const allIconsSymbol = `<symbol viewBox="0 0 16 16" id="${prefix}">${allSymbols}</symbol>`

  const result = await compileSpriter(spriter)
  const { sprite } = result.symbol
  const svg = sprite.contents.toString('utf8')
    .replace(/<\?.+\?>/g, '')
    .replace(/ xmlns:xlink="[^"]+"/g, '')
    .replace(/ xmlns="[^"]+"/g, '')
    .replace(/<svg>/, `<svg width="0" height="0"><defs>${allIconsSymbol}`)
    .replace(/<\/svg>/, '</defs></svg>')

  const iconVars = icons
    .map(({ shortName }, i) => `  --${shortName}: ${i + 1};`)
    .join('\n')
  const selectors = icons
    .map(({ shortName }) =>
`.${prefix}--${shortName},
${prefix}[icon="${shortName}"] {
  --${prefix}: var(--${shortName});
}`)
    .join('\n\n')

  const contents =
`${svg}
<style>
.${prefix},
${prefix} {
${iconVars}
  display: inline-flex;
}

.${prefix} svg,
${prefix} svg {
  height: 1rem;
  width: 1rem;
}

${prefix}:not(:defined)::before {
  content: '';
  display: block;
  height: 1rem;
  width: 1rem;
}

${selectors}
</style>
<script>
${js}
</script>
`
  if (out) {
    await fs.writeFile(path.resolve(out), contents)
  }

  return contents
}

module.exports = {
  buildSet
}
