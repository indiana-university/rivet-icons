/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { build } from 'vite';

const OUT_DIR = 'dist';
const OUT_ICONS_DIR = 'icons';
const SRC_DIR = 'src';

//
// Start build process
//

await cleanup();
const icons = await getIcons();
await createHTML(icons);
await createJS(icons);
await createIndex(icons);
await createBundle();
await createJSON(icons);

//
// Build steps
//

async function cleanup () {
	await fs.rm(OUT_DIR, { force: true, recursive: true });
	await fs.mkdir(path.join(OUT_DIR, OUT_ICONS_DIR), { recursive: true });
}

async function getIcons () {
	const promises = (await fs.readdir(SRC_DIR))
		.map((file) => {
			const filePath = path.resolve(SRC_DIR, file);
			const { ext, name } = path.parse(file);
			return { ext, filePath, name };
		})
		.filter(({ ext }) => ext === '.svg')
		.sort(sortByKey('name'))
		.map(async ({ filePath, name }) => {
			const source = await fs.readFile(filePath, { encoding: 'utf8' });
			return { name, source };
		})
	return await Promise.all(promises);
}

async function createHTML (icons) {
	const promises = icons.map(async ({ name, source }) => {
		const contents = source
			.replace(/svg /, 'svg aria-hidden="true" focusable="false" ')
			.replace(/ (xmlns|width|height)="[^"]+"/g, '');
		await writeFile(path.join(OUT_ICONS_DIR, `${name}.html`), contents);
	});
	await Promise.all(promises);
}

async function createJS (icons) {
	const promises = icons.map(async ({ name, source }) => {
		const contents =
`import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = '${name}';
export const svg = \`${source}\`;

registerIcon(name, svg);
`;
		await writeFile(path.join(OUT_ICONS_DIR, `${name}.js`), contents);
	});
	await Promise.all(promises);
}

async function createIndex (icons) {
	const contents = icons
		.map(({ name }) => `import './${OUT_ICONS_DIR}/${name}.js';\n`)
		.join('');
	await writeFile('index.js', contents);
}

async function createBundle () {
	await build({
		build: {
			emptyOutDir: false,
			lib: {
				entry: path.resolve(OUT_DIR, 'index.js'),
				fileName: 'bundle',
				name: 'RivetIcon'
			}
		}
	});
}

async function createJSON (icons) {
	const data = icons.map(({ name }) => name)
	const contents = JSON.stringify(data);
	await writeFile('icons.json', contents);
}

//
// Utilities
//

function hasKey (source, key) {
	return Object.prototype.hasOwnProperty.call(source, key);
}

function sortByKey (key) {
	return (a, b) => {
		if (!hasKey(a, key) || !hasKey(b, key)) {
			return 0;
		}
		return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
	};
}

async function writeFile (fileName, contents) {
	return fs.writeFile(path.resolve(OUT_DIR, fileName), contents);
}
