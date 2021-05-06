# Rivet icons

Icons for the [Rivet Design System](https://rivet.iu.edu/).

[**View Demo**](https://indiana-university.github.io/rivet-icons/)

1. [Quick start](#quick-start)
1. [Install](#install)
1. [Package structure](#package-structure)
1. [Usage](#usage)
1. [Use CSS icons](#use-css-icons)
1. [Use SVG icons](#use-svg-icons)
1. [Build a custom icon set](#build-a-custom-icon-set)
1. [API](#api)
1. [Icon specifications](#icon-specifications)
1. [Add a new icon](#add-a-new-icon)
1. [Run the docs site](#run-the-docs-site)
1. [Deploy the docs site](#deploy-the-docs-site)

## Quick start

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Rivet icon example</title>
    <link rel="stylesheet" http="https://unpkg.com/rivet-icons@1.0.0/dist/rivet-icons.js">
  </head>
  <body>
    <rvt-icon name="heart"></rvt-icon>
  </body>
</html>
```

## Install

```
npm install --save rivet-icons
```

## Package structure

The following are some notable files and folders in this package.

| Path | Description |
| --- | --- |
| `./dist/rivet-icons.svg` | SVG sprite of all icons. Used to externally reference an icon. |
| `./dist/rivet-icons.html` | SVG sprite, styles, and `<rvt-icon>` element, to be loaded at build time. |
| `./dist/rivet-icons.js` | SVG sprite, styles, and `<rvt-icon>` element, to be loaded at runtime. |
| `./src` | Folder of individual SVG icons. These get bundled in the CSS and SVG icon sets. |
| `./rivet-icons-source.ai` | Adobe Illustrator file of original icon artwork. |

## Usage

There are two primary ways to use Rivet icons: the CSS icon set or the SVG sprite icon set. The following are some considerations when choosing your preferred method.

| Consideration | CSS | SVG |
| --- | --- | --- |
| Works in latest browsers <sup>1</sup> | Yes | Yes |
| Works in IE | No <sup>2</sup> | Yes <sup>3</sup> |
| Change color <sup>4</sup> | Yes | Yes |
| Change icon with CSS | Yes | No |
| Change icon with JavaScript | Yes | Yes |
| Can build custom icon set | Yes | Yes |

1. Latest browser versions of Chrome, Firefox, and Safari.
1. IE11 does not support [CSS variables](https://caniuse.com/css-variables) or [`clip-path`](https://caniuse.com/css-clip-path).
1. The [`svg4everybody` polyfill](https://github.com/jonathantneal/svg4everybody) is needed if using an external SVG sprite file.
1. Icons inherit their color from the CSS `color` property.

## Use CSS icons

Add the Rivet CSS icon set to the HTML document.

```html
<link rel="stylesheet" http="/path/to/rivet-icons.css">
```

There are two ways to render a CSS icon. First, you can use the `data-rvt-icon="[icon]"` attribute.

```html
<span data-rvt-icon="heart"></span>
```

This method makes it especially useful for dynamically changing the icon with JavaScript (like React).

```jsx
const iconName = isFavorited ? 'heart-solid' : 'heart'
const icon = (<span data-rvt-icon={iconName} />)
```

Second, you can use [BEM-like classes](http://getbem.com/). The modifier class (`.rvt-icon--[icon]`) is based on the icon name.

```html
<span class="rvt-icon rvt-icon--heart"></span>
```

Icons are declared as CSS variables. This means, CSS can dynamically change the icon. In this example, the button toggles the value of `aria-pressed` for screen reader users, while the icon updates between the solid heart and outlined heart for visual users. Change the icon color with the `color` property.

```html
<button aria-pressed="true" class="favorite">
  <span class="rvt-icon favorite__icon"></span>
  Favorite
</button>
```

```css
.favorite[aria-pressed="false"] .favorite__icon {
  --rvt-icon: var(--rvt-icon-heart);
}

.favorite[aria-pressed="true"] .favorite__icon {
  --rvt-icon: var(--rvt-icon-heart-solid);
  color: red;
}
```

## Use SVG icons

Another method for using icons is with SVG sprites. Link to the symbol file and symbol id with the `<use>` element.

```html
<svg height="1rem" width="1rem">
  <use href="./path/to/rvt-icons.svg#rvt-icon-heart"></use>
</svg>
```

The height and width attributes can be replaced with a class.

```css
.rvt-icon {
  width: 1rem;
  height: 1rem;
}
```

```html
<svg class="rvt-icon">
  <use href="./path/to/rvt-icons.svg#rvt-icon-heart"></use>
</svg>
```

**Note:** Use the [`svg4everybody`](https://github.com/jonathantneal/svg4everybody) polyfill to support Internet Explorer with external symbol files.

To avoid this polyfill, the SVG symbol file contents can be copied directly to the HTML document. In this case, the file path is omitted.

```html
<svg class="rvt-icon">
  <use href="#rvt-icon-heart"></use>
</svg>
```

Set the text color to change the icon color.

```html
<svg class="rvt-icon color-red">
  <use href="#rvt-icon-heart"></use>
</svg>
```

```css
.color-red {
  color: red;
}
```

## Build a custom icon set

The Rivet icon set includes dozens of icons. If you only need a few icons or want to include icons not in this set, then you can build a custom icon set.

```js
// ./scripts/build-icons.js
const { buildIcons } = require('rivet-icons')

async function buildCustomIcons () {
  await buildIcons({
    icons: [
      'arrow*',
      'plus'
    ],
    include: [
      './src/assets/*',
      './favicon.svg'
    ],
    out: 'build'
  })
}

buildCustomIcons()

// Generates:
// ./build/rivet-icons.html
// ./build/rivet-icons.js
// ./build/rivet-icons.svg
```

This could be integrated as a npm run script and run before (or after) another build step. The package [`npm-run-all`](https://github.com/mysticatea/npm-run-all) is a good way to sequence multiple scripts.

```json
{
  "scripts": {
    "build": "npm-run-all -s build-icons build-app",
    "build-app": "webpack",
    "build-icons": "node scripts/build-icons.js"
  }
}
```

## API

### `buildIcons()`

`buildIcons(options: Object) => void`

Returns a promise that resolves when the icon files are written.

```js
await buildIcons()
```

### options.icons

**Type:** `string[]` (optional)

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

### options.include

**Type:** `string[]` (optional)

**Default:** `[]`

Specify an array of custom icons to include in the icon set, using [glob patterns](https://github.com/mrmlnc/fast-glob). Any custom icons matching a Rivet icon name will override the Rivet icon. Any non-SVG files are ignored.

```js
buildIcons({
  include: ['assets/*']
})

// Generates icon set with all Rivet icons
// and all SVG files in the local assets directory.
```

### options.out

**Type:** `string` (optional)

**Default:** `'.'`

Specify the directory for generated icon files. It defaults to the current working directory.

```js
buildIcons({
  out: 'build'
})

// Outputs the icon set to the `build` directory.
```

## Icon specifications

Original icon artwork is located in the Illustrator file in `./rivet-icons-source.ai`. Each icon is drawn on its own artboard to the following specifications:

- 16&times;16px grid
- 2px stroke for all icon outlines
- Expand all strokes before exporting and merge/flatten artwork in to one group.
- Set `fill` attribute to `currentColor` on exported SVGs.

## Add a new icon

To add a newly-created icon, follow these steps.

1. Create a new feature branch off of `develop`.
1. Create the new icon artwork in the `./rivet-icons-source.ai` file.
1. Export the icon as an `.svg` with the strokes outlined and flattened into the `./src` folder. Using the _Export for Screens..._ option. From the main Illustrator menu go to `File` > `Export` > `Export for Screens...` Select the `./src` folder as the destination and select the artboard for the new icon that you want to export as an SVG.
1. Once the new icon artwork has been expanded, flattened, and exported to the `./src` folder, type `npm run build` into your terminal to build the preview page. This will generate a preview for every file currently in the `./src` directory.
1. Follow [the instructions below](#run-the-docs-site) to run the the docs site locally and preview your new icon.
1. Open a pull request against `develop`.

## Run the docs site

To run the docs site locally or make updates to the page you'll need to do the following.

**Note:** These instructions assume [NodeJS](https://nodejs.org/en/) and NPM are installed.

1. Run `npm install` in your terminal to install the necessary dependencies.
1. Run `npm run start` to build a fresh copy of the site and start a local development server.
1. Open `http://localhost:8080/` in your web browser.

## Deploy the docs site

**Note:** This feature is for organization members only.

The icons docs site is deployed using a [Github pages branch](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages). To deploy a newly updated site (e.g. when a new icon has been added), run `npm run deploy`. This will build a fresh copy of the site and push it to the `gh-pages` branch updating the [docs site](https://indiana-university.github.io/rivet-icons/).
