/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';
import { ICON_NAMESPACE, ICON_SRC_DIR } from './constants.js';

export async function readIcons (options = {}) {
  const {
    icons = ['*'],
    include = [],
    process
  } = options
  const selectedIcons = (typeof icons === 'string' ? [icons] : icons)
    .map((n) =>
      path
        .resolve(ICON_SRC_DIR, `${n}.svg`)
        .replace(/\\/g, '/')
    )
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

function hasKey (source, key) {
  return Object.prototype.hasOwnProperty.call(source, key)
}

function sortByKey (key) {
  return (a, b) => {
    if (!hasKey(a, key) || !hasKey(b, key)) {
      return 0
    }
    return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
  }
}
