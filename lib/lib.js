/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fg = require('fast-glob')
const fs = require('fs/promises')
const path = require('path')
const { ICON_NAMESPACE, ICON_SRC_DIR } = require('./constants.js')

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

async function readIcons (options = {}) {
  const {
    icons = ['*'],
    include = [],
    process
  } = options
  const selectedIcons = (typeof icons === 'string' ? [icons] : icons)
    .map((n) => path.resolve(module.path, '..', ICON_SRC_DIR, `${n}.svg`))
  const selectedIconFiles = await fg(selectedIcons)
  const includedIconFiles = await fg(include)
  const files = [...selectedIconFiles, ...includedIconFiles]
    .map((file) => {
      const filePath = path.resolve(file)
      const { base: fileName, ext, name: shortName } = path.parse(file)
      const fullName = `${ICON_NAMESPACE}-${shortName}`
      const fullFileName = `${fullName}${ext}`
      const title = shortName.replace(/-/g, ' ')
      return { ext, fileName, filePath, fullName, fullFileName, shortName, title }
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
  readIcons
}
