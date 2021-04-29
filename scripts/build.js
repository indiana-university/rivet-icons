/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const path = require('path')
const { DOCS_BUILD_DIR, ICON_BUILD_DIR, ICON_BUILD_FILE_NAME } = require('../lib/constants.js')
const { buildIcons } = require('../lib/buildIcons.js');

async function build () {
  await fs.rmdir(ICON_BUILD_DIR, { recursive: true })
  await fs.rmdir(DOCS_BUILD_DIR, { recursive: true })
  await fs.mkdir(ICON_BUILD_DIR)
  await fs.mkdir(DOCS_BUILD_DIR)
  const buildFile = `${ICON_BUILD_DIR}/${ICON_BUILD_FILE_NAME}`
  const cssBuildFile = path.resolve(`${buildFile}.css`)
  const svgBuildFile = path.resolve(`${buildFile}.svg`)
  await buildIcons({
    out: cssBuildFile,
    type: 'css'
  })
  await buildIcons({
    out: svgBuildFile,
    type: 'svg'
  })
  const docsFile = `${DOCS_BUILD_DIR}/${ICON_BUILD_FILE_NAME}`
  const cssDocsFile = path.resolve(`${docsFile}.css`)
  const svgDocsFile = path.resolve(`${docsFile}.svg`)
  await fs.copyFile(cssBuildFile, cssDocsFile)
  await fs.copyFile(svgBuildFile, svgDocsFile)
}

build()
