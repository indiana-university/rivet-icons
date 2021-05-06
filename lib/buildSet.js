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
  await readIcons({
    ...options,
    process: async (icon) => {
      const { filePath, source } = icon
      spriter.add(filePath, null, source)
      return icon
    }
  })

  const js = await fs.readFile(path.resolve(__dirname, './rivet-icon.js'))

  const result = await compileSpriter(spriter)
  const { sprite } = result.symbol
  const svg = sprite.contents.toString('utf8')
    .replace(/<\?.+\?>/g, '')
    .replace(/ xmlns:xlink="[^"]+"/g, '')
    .replace(/ xmlns="[^"]+"/g, '')
    .replace(/<svg>/, '<svg style="display: none"><defs>')
    .replace(/<\/svg>/, '</defs></svg>')

  const contents =
`${svg}
<style>
.${prefix},
${prefix} {
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
</style>
<script type="module">
const namespace = '${prefix}'
${js}
</script>
`

  const escapedContents = contents
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$')
  const jsLoader =
`const data = \`${escapedContents}\`
const container = document.createRange().createContextualFragment(data)
document.body.appendChild(container)
`

  if (out) {
    await fs.writeFile(path.resolve(out), contents)
    await fs.writeFile(path.resolve('./dist/rivet-icons.js'), jsLoader)
  }

  return contents
}

module.exports = {
  buildSet
}
