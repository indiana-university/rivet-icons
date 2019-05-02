# Rivet icons
Source files for the Rivet icon set

[**View Demo**](https://indiana-university.github.io/rivet-icons/)

## Usage
...

## Contributing a new icon
All of the Rivet icon artwork can be found in the Illustrator file in `src/rivet-icons-source.ai`. Each icon is drawn on it's own artboard to the following specifications:

- 16x16px grid
- 2px stroke for all icon outlines
- Expand all strokes before exporting and merge/flatten artwork in to one group.
- set `fill` attribute to `currentColor` on exported SVGs

## Demo page
The Inside the `docs` folder is a simple static preview page that displays all of the current Rivet icons. To run the demo site locally or make updates to the demo site you'll need to do the following. Note: these instructions assume you have [NodeJS](https://nodejs.org/en/) and NPM installed on your computer.

1. Run `npm install` in your terminal to install the necessary dependencies
1. Type `npm run start` to build a fresh copy of the demo site and start a local development server
1. Navigate to `http://localhost:8081/` in your web browser to view the demo site.

### Adding a new icon
To add a newly-created icon to the preview page, follow these steps. 

1. Create a new feature branch off of `develop`
1. Create the new icon artwork in the `/src/rivet-icons-source.ai` file.
1. Export the icon as an .svg with the strokes outlined and flattened into the `/src/svg` folder.
1. Follow the instructions above to run the the demo page locally and preview your new icon.
1. Type `npm run build` into your terminal to build the preview page. This will generate a preview for every file currently in the `/src/svg/` directory.
1. Commit all changes to the `/src` and `/docs` folder.
1. Open a pull request against `develop`
