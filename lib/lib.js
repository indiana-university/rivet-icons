/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fg = require('fast-glob')
const fs = require('fs/promises')
const path = require('path')
const { ICON_PREFIX, ICON_SRC_DIR } = require('./constants.js')

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

function noop () {}

async function readIcons (options = {}) {
  const {
    icons = ['*'],
    include = [],
    prefix = ICON_PREFIX,
    process
  } = options
  const selectedIcons = (typeof icons === 'string' ? [icons] : icons)
    .map((n) => `${ICON_SRC_DIR}/${n}.svg`)
  const selectedIconFiles = await fg(selectedIcons)
  const includedIconFiles = await fg(include)
  const files = [...selectedIconFiles, ...includedIconFiles]
    .map((filePath) => {
      const { base: fileName, ext, name: shortName } = path.parse(filePath)
      const fullName = `${prefix}-${shortName}`
      const title = shortName.replace(/-/g, ' ')
      return { ext, fileName, filePath, fullName, shortName, title }
    })
    .filter(({ ext }) => ext === '.svg')
    .reduce((all, icon) => {
      all.set(icon.shortName, icon)
      return all
    }, new Map())
  const data = [...files.values()]
    .sort(sortByKey('shortName'))
    .map(async (data) => {
      const { filePath } = data
      const source = await fs.readFile(filePath, { encoding: 'utf8' })
      const output = { ...data, source }
      return process ? await process(output) : output
    })
  return await Promise.all(data)
}

function sortByKey (key) {
  return (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0
    }
    return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
  }
}

module.exports = {
  compileSpriter,
  noop,
  readIcons
}
