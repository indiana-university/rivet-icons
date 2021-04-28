# Rivet icons
Source files for the Rivet icon set

[**View Demo**](https://indiana-university.github.io/rivet-icons/)

## Quick start

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Rivet icon example</title>
    <link rel="stylesheet" http="https://unpkg.com/rivet-icons@1.0.0/dist/rivet-icons.css">
  </head>
  <body>
    <span data-rvt-icon="alarm"></span>
  </body>
</html>
```

## Usage

### CSS icons

### SVG sprite icons

## Build a custom icon set

The Rivet icon set includes dozens of icons. If you only need a few icons or want to include icons not in this set, then you can build a custom icon set.

```
npm install --save-dev rivet-icons
```

```js
const { buildIcons } = require('rivet-icons')

async function buildIcons () {
  const iconStyles = await buildIcons({
    icons: [
      'arrow*',
      'plus'
    ]
    include: [
      './src/assets/*',
      './favicon.svg'
    ],
    out: './build/icons.css',
    type: 'css'
  })
}

buildIcons()
```

## API

### `buildIcons()`

`buildIcons(options: Object) => Promise<string>`

Returns a promise that resolves to the file contents of the icon set.

```js
const css = await buildIcons({ type: 'css' })
const svg = await buildIcons({ type: 'svg' })

// Save the generated file contents (string) to a variable.
// Useful if you want to manage the output in a custom way.
```

#### options.icons

**Type:** `string[]`
**Default:** `['*']`

Specify the Rivet icons to include. By default, it includes the entire set. To include specific icons, pass an array of icon names or [glob patterns](https://github.com/mrmlnc/fast-glob). Exclude the `.svg` file extention. If an empty array is used, no icons will be included.

```js
buildIcons({
  icons: ['arrow*', 'plus']
})

// Generates icon set with:
// arrow-down
// arrow-left
// arrow-right
// arrow-up
// plus
```

#### options.include

**Type:** `string[]`
**Default:** `[]`

Specify an array of custom icons to include in the icon set, using [glob patterns](https://github.com/mrmlnc/fast-glob). Any custom icons matching a Rivet icon name will override the Rivet icon. Any non-SVG files are ignored.

```js
buildIcons({
  include: ['assets/*']
})

// Generates icon set with all Rivet icons
// and all SVG files in the local assets directory.
```

#### options.out

**Type:** `string | null`
**Default:** `null`

Specify the file name of the generated stylesheet. If `null`, then the file is not generated.

```js
buildIcons({
  out: './build/icons.css'
})

// Outputs icon set to file.
```

### options.prefix

**Type:** `string`
**Default:** `'rvt-icon'`

Specify the prefix that will be attached to CSS variable names and CSS selectors.

```js
buildIcons({
  prefix: 'app'
})
```

### options.type

**Type:** `'css' | 'svg'`
**Default:** `'css'`

Specify the type of icon set to generate.




### Usage
Inside the `/dist` folder there is a file called `rvt-icons.svg` that a SVG sprite sheet that uses the `<symbol>` element to bundle all of the Rivet icons together into one file. To use the bundled SVGs in your project:

1. Download the `rvt-icons.svg` file.
2. You can either A.) inline the `rvt-icons.svg` file's contents in your page or B.) add the file to your project and reference the `<symbol>` elements inside the sprite sheet with relative URLS. NOTE: this option requires [a small polyfill](https://github.com/jonathantneal/svg4everybody) to work in IE11).
3. Reference the SVG icon you want to use by its `id` attribute.
4. Choose a method for sizing your icons. In the examples below we're adding CSS class called `rvt-icon`, but you could use `width` and `height` HTML attributes also.

```css
.rvt-icon {
  width: 1rem;
  height: 1rem;
}
```

Using **option A** listed above:

```html
<svg class="rvt-icon">
  <use xlink:href="#rvt-icon-alarm"></use>
</svg>
```

Using **option B** listed above:

```html
<svg class="rvt-icon">
  <use xlink:href="./path/to/svg/rvt-icons.svg#rvt-icon-alarm"></use>
</svg>
```

#### Using individual inline SVG icons
If you would rather inline the source `.svg` files in your HTML you can clone or download this repository and use the files in the `./src/svg/` directory.

### Contributing a new icon
All of the Rivet icon artwork can be found in the Illustrator file in `src/rivet-icons-source.ai`. Each icon is drawn on it's own artboard to the following specifications:

- 16x16px grid
- 2px stroke for all icon outlines
- Expand all strokes before exporting and merge/flatten artwork in to one group.
- Set `fill` attribute to `currentColor` on exported SVGs.

#### Adding a new icon
To add a newly-created icon to the preview page, follow these steps. 

1. Create a new feature branch off of `develop`.
1. Create the new icon artwork in the `/src/rivet-icons-source.ai` file.
1. Export the icon as an .svg with the strokes outlined and flattened into the `/src/svg` folder. Using the _Export for Screens..._ option. From the main Illustrator menu go to `File` > `Export` > `Export for Screens...` Select the `src/svg` folder as the destination and select the artboard for the new icon that you want to export as an SVG.
1. Once the new icon artwork has been expanded, flattened, and exported to the `src/svg` folder, type `npm run build` into your terminal to build the preview page. This will generate a preview for every file currently in the `/src/svg/` directory.
1. Follow [the instructions below](#demo-page) to run the the demo page locally and preview your new icon.
1. Open a pull request against `develop`.

#### Demo page
To run the demo site locally or make updates to the page you'll need to do the following.

Note: these instructions assume you have [NodeJS](https://nodejs.org/en/) and NPM installed on your computer.

1. Run `npm install` in your terminal to install the necessary dependencies.
1. Type `npm run start` to build a fresh copy of the demo site and start a local development server.
1. Navigate to `http://localhost:8080/` in your web browser to view the demo site.

### Deploying the demo site (Organization members only)
The icons demo site is deployed using a [Github pages branch](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages). To deploy a newly updated site (e.g. when a new icon has been added), run `npm run deploy`. This will build a fresh copy of the site and push it to the `gh-pages` branch updating [the demo site](https://indiana-university.github.io/rivet-icons/).

### Building a custom SVG sprite sheet
By default the `rvt-icons.svg` sprite sheet comes with [all of the Rivet icons](https://github.com/indiana-university/rivet-icons/tree/develop/src/svg) included. If you only use a few icons in your app and want to reduce the size of your sprite sheet you can [download](https://github.com/indiana-university/rivet-icons/archive/develop.zip) or [clone this repository](https://github.com/indiana-university/rivet-icons.git) and do the following:

1. Clone the repository: `git clone https://github.com/indiana-university/rivet-icons.git`
1. `cd rivet-icons` and install the necessary dependencies `npm install`
1. Open the `svg.config.js` file in a text editor and modify the contents of the `svgFilePaths` array. The default value is a [glob](https://gulpjs.com/docs/en/api/concepts#globs) of all the `.svg`s in the `./src/svg/` directory. Remove that value then add the paths to the individual icons that you would like to include in your custom sprite sheet.
1. Type `npm run build` into your terminal to run a Gulp task that will build your custom sprite sheet.

#### Custom `svg.config.js` example:

Given the following configuration, the resulting SVG bundle would:

- Only contain the four arrow icons from the Rivet icon set
- Have a file name of `rvt-icons-arrows-only.svg`
- Be output to a folder called `/dist` in the root of the repository

```js
module.exports = {
  symbolFileName: 'rvt-icons-arrows-only',
  svgFilePaths: [
    './src/svg/rvt-icon-arrow-up.svg',
    './src/svg/rvt-icon-arrow-right.svg',
    './src/svg/rvt-icon-arrow-down.svg',
    './src/svg/rvt-icon-arrow-left.svg'
  ]
};
```
