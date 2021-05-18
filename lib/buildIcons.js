/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const path = require('path')
const SVGSpriter = require('svg-sprite')
const { ICON_BUILD_FILE_NAME, ICON_NAMESPACE } = require('./constants.js')
const { compileSpriter, readIcons } = require('./lib.js')

const elementFileName = 'rivet-icon-element.js'

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
  const icons = await readIcons({
    ...options,
    process: async (icon) => {
      const { filePath, source } = icon
      spriter.add(filePath, null, source)
      return icon
    }
  })
  const result = await compileSpriter(spriter)

  const outFile = (ext) => path.resolve(out, `${ICON_BUILD_FILE_NAME}.${ext}`)

  await fs.mkdir(path.resolve(out), { recursive: true })

  const svgContents = result.symbol.sprite.contents.toString('utf8')
  await fs.writeFile(outFile('svg'), svgContents)

  const htmlContents = svgContents
    .replace(/<\?.+\?>/g, '')
    .replace(/ xmlns:xlink="[^"]+"/g, '')
    .replace(/ xmlns="[^"]+"/g, '')
    .replace(/<svg>/, '<svg style="display: none"><defs>')
    .replace(/<\/svg>/, '</defs></svg>')
  await fs.writeFile(outFile('html'), `${htmlContents}\n`)

  const jsContents =
`const data = \`${htmlContents}\`
const container = document.createRange().createContextualFragment(data)
document.body.appendChild(container)
`
  await fs.writeFile(outFile('js'), jsContents)

  const cssContents =
`.${ICON_NAMESPACE},
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
`
  await fs.writeFile(outFile('css'), cssContents)

  const rivetIconElementContents = await fs.readFile(path.resolve(__dirname, elementFileName))
  const elementContents =
`const namespace = '${ICON_NAMESPACE}'
${rivetIconElementContents}`
  await fs.writeFile(path.resolve(out, elementFileName), elementContents)

  const renameIcons = icons.map(({ fullFileName, source }) =>
    fs.writeFile(path.resolve(out, fullFileName), source)
  )
  await Promise.all(renameIcons)

  const inlineIcons = icons.map(({ fullName, source }) => {
    const contents = source
      .replace(/svg /, 'svg aria-hidden="true" ')
      .replace(/ (xmlns|width|height)="[^"]+"/g, '')
    return fs.writeFile(path.resolve(out, `${fullName}.html`), contents)
  })
  await Promise.all(inlineIcons)
}

module.exports = {
  buildIcons
}
