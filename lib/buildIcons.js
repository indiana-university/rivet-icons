/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const path = require('path')
const SVGSpriter = require('svg-sprite')
const { ICON_BUILD_FILE_NAME, ICON_NAMESPACE } = require('./constants.js')
const { compileSpriter, readIcons } = require('./lib.js')

async function buildIcons (options = {}) {
  const { out = '' } = options
  const spriter = new SVGSpriter({
    shape: {
      id: {
        generator: `${ICON_NAMESPACE}-`
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
  const result = await compileSpriter(spriter)
  const svgContents = result.symbol.sprite.contents.toString('utf8')
  const symbolContents = svgContents
    .replace(/<\?.+\?>/g, '')
    .replace(/ xmlns:xlink="[^"]+"/g, '')
    .replace(/ xmlns="[^"]+"/g, '')
    .replace(/<svg>/, '<svg style="display: none"><defs>')
    .replace(/<\/svg>/, '</defs></svg>')
  const cssContents =
`.${ICON_NAMESPACE} {
  display: inline-flex;
}

.${ICON_NAMESPACE} > svg {
  height: 1rem;
  width: 1rem;
}
`
  const rivetIconElementContents = await fs.readFile(path.resolve(__dirname, './rivet-icon-element.js'))
  const htmlContents =
`${symbolContents}
<style>
.${ICON_NAMESPACE},
${ICON_NAMESPACE} {
  display: inline-flex;
}

.${ICON_NAMESPACE} > svg,
${ICON_NAMESPACE} > svg,
${ICON_NAMESPACE}:not(:defined)::before {
  height: 1rem;
  width: 1rem;
}

${ICON_NAMESPACE}:not(:defined)::before {
  content: '';
  display: block;
}
</style>
<script type="module">
const namespace = '${ICON_NAMESPACE}'
${rivetIconElementContents}
</script>
`
  const escapedHtml = htmlContents
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$')
  const jsContents =
`const data = \`${escapedHtml}\`
const container = document.createRange().createContextualFragment(data)
document.body.appendChild(container)
`
  const outFile = (ext) => path.resolve(out, `${ICON_BUILD_FILE_NAME}.${ext}`)
  await fs.writeFile(outFile('svg'), svgContents)
  await fs.writeFile(outFile('css'), cssContents)
  await fs.writeFile(outFile('html'), htmlContents)
  await fs.writeFile(outFile('js'), jsContents)
}

module.exports = {
  buildIcons
}
