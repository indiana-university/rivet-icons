/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const path = require('path')
const { PREFIX, SVG_DIR } = require('./constants.js')

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
    src = SVG_DIR,
    include = [],
    prefix = PREFIX,
    process
  } = options
  const allFiles = await fs.readdir(path.resolve(src))
  const files = allFiles
    .map((fileName) => {
      const filePath = path.resolve(`${src}/${fileName}`)
      const fullName = fileName.replace('.svg', '')
      const shortName = fullName.replace(`${prefix}-`, '')
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
