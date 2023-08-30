/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { build } from 'vite';

const OUT_DIR = 'dist';
const ICONS_DIR = 'icons';
const SRC_DIR = 'src';

//
// Start build process
//

await cleanup();
const icons = await getIcons();
await createJS(icons);
await createIndex(icons);
await createBundle();
await createJSON(icons);

//
// Build steps
//

async function cleanup () {
	await fs.rm(OUT_DIR, { force: true, recursive: true });
	await fs.mkdir(path.join(OUT_DIR, ICONS_DIR), { recursive: true });
}

async function getIcons () {
	const dir = path.join(SRC_DIR, ICONS_DIR);
	const promises = (await fs.readdir(dir))
		.map((file) => {
			const filePath = path.resolve(dir, file);
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

async function createJS (icons) {
	const promises = icons.map(async ({ name, source }) => {
		const svg = source
			.replace(/ (fill|height|viewBox|width|xmlns)="[^"]+"/g, '')
			.replace(/(\n|  )/g, '')
		const contents =
`import { registerIcon } from '../../${SRC_DIR}/rivet-icon-element.js';

export const name = '${name}';
export const svg = \`${svg}\`;

registerIcon(name, svg);
`;
		await writeFile(path.join(ICONS_DIR, `${name}.js`), contents);
	});
	await Promise.all(promises);
}

async function createIndex (icons) {
	const imports = icons
		.map(({ name }) => `import './${ICONS_DIR}/${name}.js';\n`)
		.join('');
	const exports = `export * from '../${SRC_DIR}/rivet-icon-element.js';\n`;
	const contents = `${imports}${exports}`;
	await writeFile('index.js', contents);
}

async function createBundle () {
	await build({
		build: {
			emptyOutDir: false,
			lib: {
				entry: path.resolve(OUT_DIR, 'index.js'),
				fileName: 'bundle',
				name: 'RivetIcons'
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
