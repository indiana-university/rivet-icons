/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const path = require('path')
const { pathThatSvg } = require('path-that-svg')
const SVGSpriter = require('svg-sprite')
const { ICON_BUILD_DIR, ICON_BUILD_FILE_NAME, ICON_PREFIX } = require('./constants.js')
const { compileSpriter, readIcons } = require('./lib.js')

async function buildSprite (options = {}) {
  const {
    out = `${ICON_BUILD_DIR}/${ICON_BUILD_FILE_NAME}.svg`,
    prefix = ICON_PREFIX
  } = options
  const spriter = new SVGSpriter({
    shape: {
      id: {
        generator: `${prefix}-`
      }
    },
    mode: {
      symbol: {
        dest: path.dirname(out),
        sprite: path.basename(out)
      }
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
    await fs.writeFile(sprite.path, sprite.contents)
  }

  return sprite.contents.toString('utf8')
}

async function buildStyles (options = {}) {
  const {
    out = `${ICON_BUILD_DIR}/${ICON_BUILD_FILE_NAME}.css`,
    prefix = ICON_PREFIX
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
`.${prefix}--${shortName},
[data-${prefix}="${shortName}"] {
  --${prefix}: var(--${fullName});
}`)
    .join('\n\n')
  const css =
`:root {
${iconVars}
}

.${prefix},
[data-${prefix}] {
  display: inline-flex;
  padding: 0.25rem;
}

.${prefix}::before,
[data-${prefix}]::before {
  background-color: currentColor;
  clip-path: path(var(--${prefix}));
  content: '';
  display: inline-block;
  height: 1rem;
  width: 1rem;
}

${selectors}
`
  if (out) {
    await fs.writeFile(path.resolve(out), css)
  }

  return css
}

module.exports = {
  buildSprite,
  buildStyles
}
