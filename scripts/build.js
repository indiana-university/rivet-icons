/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fg = require('fast-glob')
const fs = require('fs-extra')
const path = require('path')
const { DOCS_BUILD_DIR, ICON_BUILD_DIR, ICON_NAMESPACE, ICON_SRC_DIR } = require('../lib/constants.js')
const { buildIcons } = require('../lib/buildIcons.js');

async function build () {
  await fs.rmdir(ICON_BUILD_DIR, { recursive: true })
  await fs.rmdir(DOCS_BUILD_DIR, { recursive: true })
  await fs.mkdir(ICON_BUILD_DIR)
  await fs.mkdir(DOCS_BUILD_DIR)
  await buildIcons({
    out: ICON_BUILD_DIR
  })
  const icons = await fg(`${ICON_SRC_DIR}/*`)
  const renameIcons = icons.map((file) => {
    const { base } = path.parse(file)
    return fs.copy(file, `${ICON_BUILD_DIR}/icons/${ICON_NAMESPACE}-${base}`)
  })
  await Promise.all(renameIcons)
  await fs.copy(ICON_BUILD_DIR, DOCS_BUILD_DIR)
}

build()
