/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

import fs from 'fs/promises';
import { buildIcons } from '../lib/buildIcons.js';
import { DOCS_BUILD_DIR, ICON_BUILD_DIR } from '../lib/constants.js';

async function build () {
	await fs.rm(DOCS_BUILD_DIR, { force: true, recursive: true });
	await fs.rm(ICON_BUILD_DIR, { force: true, recursive: true });
	await fs.mkdir(ICON_BUILD_DIR, { recursive: true });
	await buildIcons();
}

build();
