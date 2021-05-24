/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const path = require('path')
const SVGSpriter = require('svg-sprite')
const { ICON_FILE_NAME, ICON_NAMESPACE } = require('./constants.js')
const { compileSpriter, readIcons } = require('./lib.js')

const templatesPath = path.resolve(__dirname, 'templates')

async function buildIcons (options = {}) {
  const { out = '' } = options

  await fs.mkdir(path.resolve(out), { recursive: true })

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
  const svgContents = result.symbol.sprite.contents.toString('utf8')
  await fs.writeFile(path.resolve(out, `${ICON_FILE_NAME}s.svg`), `${svgContents}\n`)

  const symbolContents = svgContents
    .replace(/<\?.+\?>/g, '')
    .replace(/ xmlns:xlink="[^"]+"/g, '')
    .replace(/ xmlns="[^"]+"/g, '')
    .replace(/<svg>/, '')
    .replace(/<\/svg>/, '')
  const htmlContents = await processTemplate(`${ICON_FILE_NAME}s.html`, out, (template) =>
    template.replace(/ICON_SYMBOLS/g, symbolContents)
  )

  await processTemplate(`${ICON_FILE_NAME}s.js`, out, (template) =>
    template.replace(/ICON_SYMBOLS/g, htmlContents.trim())
  )

  await processTemplate(`${ICON_FILE_NAME}s.css`, out, (template) =>
    template.replace(/ICON_NAMESPACE/g, ICON_NAMESPACE)
  )

  await processTemplate(`${ICON_FILE_NAME}-element.js`, out, (template) =>
    template.replace(/ICON_NAMESPACE/g, ICON_NAMESPACE)
  )

  const renameIcons = icons.map(({ fullFileName, source }) =>
    fs.writeFile(path.resolve(out, fullFileName), source)
  )
  await Promise.all(renameIcons)

  const inlineIcons = icons.map(({ fullName, source }) => {
    const contents = source
      .replace(/svg /, 'svg aria-hidden="true" focusable="false" ')
      .replace(/ (xmlns|width|height)="[^"]+"/g, '')
    return fs.writeFile(path.resolve(out, `${fullName}.html`), contents)
  })
  await Promise.all(inlineIcons)
}

async function processTemplate (fileName, out, process) {
  const template = await fs.readFile(path.resolve(templatesPath, fileName))
  const contents = process(template.toString('utf8'))
  await fs.writeFile(path.resolve(out, fileName), contents)
  return contents
}

module.exports = {
  buildIcons
}
