# Rivet icons
These are the WIP source files for a basic set of Rivet icons.

[**View Demo**](https://indiana-university.github.io/rivet-icons/)

## Basic guidelines
- 16x16px grid
- 2px stroke
- Expand all strokes before exporting and merge/flatten artwork in to one group.
- set `fill` attribute to `currentColor`

## Docs folder
Inside the docs folder is a simple static preview page that displays all of the current Rivet icons. Typing `npm run build` into your terminal will generate the demo site and create a preview of every `.svg` icon in the `/svg` folder at build time.

To add a newly-created icon to the preview page, follow these steps. These instructions assume you have [NodeJS](https://nodejs.org/en/) and NPM installed on your computer.

1. Create the new icon artwork in the `/src/rivet-icons-source.ai` file.
2. Export the icon as an .svg with the strokes outlined and flattened into the `/src/svg` folder.
3. Type `npm run build` into your terminal to build the preview page.
4. Commit all changes to the `/src` and `/docs` folder.
