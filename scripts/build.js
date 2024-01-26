/*!
 * Copyright (C) 2021 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { build } from 'vite';

const BUNDLE_BASE_NAME = 'rivet-icons';
const ELEMENT_BASE_NAME = 'rivet-icon-element';
const ICONS_DIR = 'icons';
const OUT_DIR = 'dist';
const SRC_DIR = 'src';

//
// Start build process
//

await cleanup();
const icons = await getIcons();
await createJSON(icons);
await createCustomElement();
await createJS(icons);
await createBundle(icons);

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
		});
	return await Promise.all(promises);
}

async function createJSON (icons) {
	const data = icons.map(({ name }) => name);
	const contents = JSON.stringify(data);
	await writeFile(`${BUNDLE_BASE_NAME}.json`, contents);
}

async function createCustomElement () {
	await build({
		build: {
			emptyOutDir: false,
			lib: {
				entry: `${SRC_DIR}/${ELEMENT_BASE_NAME}.js`,
				fileName: ELEMENT_BASE_NAME,
				formats: ['es']
			},
			rollupOptions: {
				output: {
					assetFileNames: `${ELEMENT_BASE_NAME}.[ext]`
				}
			}
		}
	});
}

async function createJS (icons) {
	const promises = icons.map(async ({ name, source }) => {
		const svg = source
			.replace(/ (fill|height|viewBox|width|xmlns)="[^"]+"/g, '')
			.replace(/(\n|  )/g, '');
		const contents =
`import { registerIcon } from '../${ELEMENT_BASE_NAME}.js';

export const name = '${name}';
export const svg = \`${svg}\`;

registerIcon(name, svg);
`;
		await writeFile(path.join(ICONS_DIR, `${name}.js`), contents);
	});
	await Promise.all(promises);
}

async function createBundle (icons) {
	const tmpFile = 'tmp.js';
	const tmpPath = path.resolve(OUT_DIR, tmpFile);
	const imports = icons
		.map(({ name }) => `import './${ICONS_DIR}/${name}.js';\n`)
		.join('');
	const exports = `export * from './${ELEMENT_BASE_NAME}.js';\n`;
	const contents = `${imports}${exports}`;
	await writeFile(tmpFile, contents);
	await build({
		build: {
			emptyOutDir: false,
			lib: {
				entry: tmpPath,
				fileName: BUNDLE_BASE_NAME,
				formats: ['es']
			}
		}
	});
	await fs.rm(tmpPath);
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
