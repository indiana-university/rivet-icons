/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs/promises')
const { buildIcons } = require('../lib/buildIcons.js')
const { DOCS_BUILD_DIR, ICON_BUILD_DIR } = require('../lib/constants.js')

async function build () {
  await fs.rmdir(ICON_BUILD_DIR, { recursive: true })
  await fs.rmdir(DOCS_BUILD_DIR, { recursive: true })
  await buildIcons({
    out: ICON_BUILD_DIR
  })
}

build()
