/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const { buildSprite, buildStyles } = require('./index.js');

async function build () {
  const outDir = './dist'
  const docDir = './docs'
  const fileName = 'rivet-icons'
  await fs.rmdir(outDir, { recursive: true })
  await fs.rmdir(docDir, { recursive: true })
  await fs.mkdir(outDir)
  await fs.mkdir(docDir)
  await buildSprite()
  await buildStyles()
  await fs.copyFile(`${outDir}/${fileName}.css`, `${docDir}/${fileName}.css`)
  await fs.copyFile(`${outDir}/${fileName}.svg`, `${docDir}/${fileName}.svg`)
}

build()
