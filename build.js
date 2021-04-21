/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const path = require('path')
const { BUILD_DIR, DOCS_DIR, FILE_NAME } = require('./constants.js')
const { buildSprite, buildStyles } = require('./index.js');

async function build () {
  await fs.rmdir(BUILD_DIR, { recursive: true })
  await fs.rmdir(DOCS_DIR, { recursive: true })
  await fs.mkdir(BUILD_DIR)
  await fs.mkdir(DOCS_DIR)
  await buildSprite()
  await buildStyles()
  await fs.copyFile(path.resolve(`${BUILD_DIR}/${FILE_NAME}.css`), path.resolve(`${DOCS_DIR}/${FILE_NAME}.css`))
  await fs.copyFile(path.resolve(`${BUILD_DIR}/${FILE_NAME}.svg`), path.resolve(`${DOCS_DIR}/${FILE_NAME}.svg`))
}

build()
