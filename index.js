/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const path = require('path')
const { pathThatSvg } = require('path-that-svg')
const SVGSpriter = require('svg-sprite')
const { symbolFileName } = require('./svg.config')

const NAMESPACE = 'rvt-icon'

async function buildSprite (options = {}) {
  const {
    dir = './dist',
    out = `${symbolFileName}.svg`
  } = options
  const spriter = new SVGSpriter({
    mode: {
      symbol: {
        dest: 'dist',
        sprite: out
      }
    }
  })
  await readIcons({
    ...options,
    process: async ({ filePath, source }) => {
      spriter.add(path.resolve(filePath), null, source)
    }
  })
  const result = await compileSpriter(spriter)
  const { sprite } = result.symbol

  if (out) {
    await fs.writeFile(sprite.path, sprite.contents)
  }

  return sprite.contents.toString('utf8')
}

function compileSpriter (spriter) {
  return new Promise((resolve, reject) => {
    spriter.compile((error, result) => {
      if (error) {
        return reject(error)
      }
      resolve(result)
    })
  })
}

async function buildStyles (options = {}) {
  const {
    dir = './dist',
    namespace = NAMESPACE,
    out = `${dir}/${symbolFileName}.css`
  } = options
  const icons = await readIcons({
    ...options,
    process: async (data) => {
      const { source } = data
      const tranformedSvg = await pathThatSvg(source)
      const svg = [...tranformedSvg.matchAll(/ d="([a-zA-Z0-9-,.\s]+)"/g)]
        .filter((match) => match)
        .map((match) => match[1])
        .map((d) => d.replace(/\s/g, ' '))
        .join(' ')
      return { ...data, svg }
    }
  })
  const iconVars = icons
    .map(({ fullName, svg }) => `  --${fullName}: '${svg}';`)
    .join('\n')
  const selectors = icons
    .map(({ fullName, shortName }) =>
`.${namespace}--${shortName},
[data-${namespace}="${shortName}"] {
  --${namespace}: var(--${fullName});
}`)
    .join('\n\n')
  const css =
`:root {
${iconVars}
}

.${namespace},
[data-${namespace}] {
  display: inline-flex;
  padding: 0.25rem;
}

.${namespace}::before,
[data-${namespace}]::before {
  background-color: currentColor;
  clip-path: path(var(--${namespace}));
  content: '';
  display: inline-block;
  height: 1rem;
  width: 1rem;
}

${selectors}
`
  if (out) {
    await fs.writeFile(out, css)
  }

  return css
}

async function readIcons (options = {}) {
  const {
    src = './src/svg',
    include = [],
    namespace = NAMESPACE,
    process = () => {}
  } = options
  const allFiles = await fs.readdir(src)
  const files = allFiles
    .map((fileName) => {
      const filePath = `${src}/${fileName}`
      const fullName = fileName.replace('.svg', '')
      const shortName = fullName.replace(`${namespace}-`, '')
      return { fileName, filePath, fullName, shortName }
    })
    .filter(({ shortName }) =>
      include.length
        ? include.includes(shortName)
        : true
    )
    .map(async (data) => {
      const { filePath } = data
      const source = await fs.readFile(filePath, { encoding: 'utf8' })
      return await process({ ...data, source })
    })
  return await Promise.all(files)
}

module.exports = {
  buildSprite,
  buildStyles
}
