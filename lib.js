/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

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

async function readIcons (options = {}) {
  const {
    src = ICON_SRC_DIR,
    include = [],
    prefix = ICON_PREFIX,
    process
  } = options
  const allFiles = await fs.readdir(path.resolve(src))
  const files = allFiles
    .map((fileName) => {
      const filePath = path.resolve(`${src}/${fileName}`)
      const shortName = fileName.replace('.svg', '')
      const fullName = `${prefix}-${shortName}`
      const title = shortName.replace(/-/g, ' ')
      return { fileName, filePath, fullName, shortName, title }
    })
    .filter(({ shortName }) =>
      include.length
        ? include.includes(shortName)
        : true
    )
    .map(async (data) => {
      const { filePath } = data
      const source = await fs.readFile(filePath, { encoding: 'utf8' })
      const output = { ...data, source }
      return process ? await process(output) : output
    })
  return await Promise.all(files)
}

module.exports = {
  compileSpriter,
  readIcons
}
