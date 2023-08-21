/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

import fs from 'fs/promises';
import path from 'path';
import { ICON_BUILD_DIR, ICON_NAMESPACE } from './constants.js';
import { readIcons } from './readIcons.js';

const templatesPath = 'lib/templates';

export async function buildIcons () {
	const icons = await readIcons();
	await createSVG(icons);
	await createHTML(icons);
	await createJS(icons);
	await createIndex(icons);
	await createCustomElement();
}

async function createSVG (icons) {
	const promises = icons.map(({ shortName, source }) =>
		writeFile(`${shortName}.svg`, source)
	);
	await Promise.all(promises);
}

async function createHTML (icons) {
	const promises = icons.map(async ({ shortName, source }) => {
		const contents = source
			.replace(/svg /, 'svg aria-hidden="true" focusable="false" ')
			.replace(/ (xmlns|width|height)="[^"]+"/g, '');
		await writeFile(`${shortName}.html`, contents);
	});
	await Promise.all(promises);
}

async function createJS (icons) {
	const promises = icons.map(async ({ shortName, source }) => {
		const template = await fs.readFile(path.resolve(templatesPath, 'rivet-icon.js'));
		const contents = template.toString('utf-8')
			.replace(/ICON_NAME/g, shortName)
			.replace(/ICON_SVG/g, source);
		await writeFile(`${shortName}.js`, contents);
	});
	await Promise.all(promises);
}

async function createIndex (icons) {
	const contents = icons
		.map(({ shortName }) => `import './${shortName}.js';\n`)
		.join('');
	await writeFile('index.js', contents);
}

async function createCustomElement () {
	const fileName = 'rivet-icon-element.js';
	const template = await fs.readFile(path.resolve(templatesPath, fileName));
	const contents = template.toString('utf-8')
		.replace(/ICON_NAMESPACE/g, ICON_NAMESPACE);
	await writeFile(fileName, contents);
}

async function writeFile (fileName, contents) {
	return fs.writeFile(path.resolve(ICON_BUILD_DIR, fileName), contents);
}
