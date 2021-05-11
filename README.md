# Rivet icons

Icons for the [Rivet Design System](https://rivet.iu.edu/).

[**View Demo**](https://indiana-university.github.io/rivet-icons/)

1. [Quick start](#quick-start)
1. [Install](#install)
1. [Package structure](#package-structure)
1. [Usage](#usage)
1. [Use the icon element](#use-the-icon-element)
1. [Use internal SVG symbols](#use-internal-svg-symbols)
1. [Use external SVG symbols](#use-external-svg-symbols)
1. [Use inline SVG](#use-inline-svg)
1. [Change icon color](#change-icon-color)
1. [Change icon size](#change-icon-size)
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
  </head>
  <body>
    <rvt-icon name="heart"></rvt-icon>
    <script http="https://unpkg.com/rivet-icons@1.0.0/dist/rivet-icons.js"></script>
  </body>
</html>
```

## Install

```
npm install --save rivet-icons
```

## Package structure

The following are some notable contents in this package.

| Path | Description |
| --- | --- |
| `./dist` | Production files (CSS, HTML, JS, SVG). |
| `./src` | Source SVG files. |
| `./rivet-icons-source.ai` | Adobe Illustrator file of original icon artwork. |

## Usage

Choose a way to use the icons.

1. [Use the icon element](#use-the-icon-element) (`<rvt-icon>`).
1. [Use internal SVG symbols](#use-internal-svg-symbols).
1. [Use external SVG symbols](#use-external-svg-symbols).
1. [Use inline SVG](#use-inline-svg).

| Consideration | Element | Internal | External | Inline |
| --- | --- | --- | --- | --- |
| Works in latest browsers <sup>1</sup> | Yes | Yes | Yes | Yes |
| Works in Internet Explorer | No <sup>2</sup> | Yes | Maybe <sup>3</sup> | Yes |
| Requires JavaScript | Yes | No | Maybe <sup>3</sup> | No |
| Change icon color <sup>4</sup> | Yes | Yes | Yes | Yes |
| Change icon with CSS variables | Yes | No | No | No |
| Change icon with JavaScript | Yes | Yes | Yes | Yes |
| Can build custom icon set | Yes | Yes | Yes | Yes |

1. Latest browser versions of Chrome, Edge, Firefox, and Safari.
1. Internet Explorer does not support [custom elements](https://caniuse.com/custom-elementsv1) or [CSS variables](https://caniuse.com/css-variables).
1. Internet Explorer does not support [SVG external content](https://caniuse.com/mdn-svg_elements_use_external_uri). Use the [`svg4everybody` polyfill](https://github.com/jonathantneal/svg4everybody) to provide support.
1. Icons inherit their color from the CSS `color` property.

## Use the icon element

Either embed `rivet-icons.html` in the page to avoid a network request or link to `rivet-icons.js` to load the icons at runtime. Both of these files contain the same [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements), styles, and SVG symbols needed to render the icons.

```html
<script src="path/to/rivet-icons.js"></script>
```

Render the icon in HTML.

```html
<rvt-icon name="heart"></rvt-icon>
```

Use JavaScript to dynamically change the icon via the `name` attribute. This example uses JSX (React).

```jsx
const iconName = isFavorited ? 'heart-solid' : 'heart'
const icon = (<rvt-icon name={iconName} />)
```

Use CSS to dynamically change the icon via the `--rvt-icon` variable. Set its value to the CSS variable of the desired icon ("heart" is `var(--heart)`). In order to not pollute the global `:root` scope, icon variables are declared at the level of the `rvt-icon` element. That means, `--rvt-icon` should only be used on the `rvt-icon` element itself, not on an ancestor.

In this example, the button toggles the value of `aria-pressed` for screen reader users, while the icon updates between the solid heart and outlined heart for visual users. Change the icon color with the `color` property.

```html
<button aria-pressed="true" class="favorite">
  <rvt-icon class="favorite__icon"></span>
  Favorite
</button>
```

```css
/* Do this. */
.favorite[aria-pressed="false"] .favorite__icon {
  --rvt-icon: var(--heart);
}

.favorite[aria-pressed="true"] .favorite__icon {
  --rvt-icon: var(--heart-solid);
  color: red;
}

/* This won't work. */
.favorite[aria-pressed="false"] {
  --rvt-icon: var(--heart);
}

.favorite[aria-pressed="true"] {
  --rvt-icon: var(--heart-solid);
  color: red;
}
```

CSS variable declarations always override the `name` attribute. In this case, the icon will render as `heart-solid`, not `heart`.

```html
<rvt-icon name="heart" class="heart-solid"></rvt-icon>
```

```css
.heart-solid {
  --rvt-icon: var(--heart-solid);
}
```

A "flash of unstyled content" happens when `<rvt-icon>` is used before the element definition is registered. This looks like the icon is briefly invisible, as if `visibility: hidden` is applied and suddenly removed. To avoid this, either place the `rivet-icons.html` or `rivet-icons.js` references before any use of `<rvt-icon>`, or wait to render content until after it registers with [`whenDefined()`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined).

```js
window.customElements.whenDefined('rvt-icon').then(() => {
  render()
})
```

## Use internal SVG symbols

If not wanting to use `<rvt-icon>` while using `rivet-icons.js` or `rivet-icons.html`, then render an icon with the following snippet. All `href` values reference the SVG symbol ID, in the format of `#rvt-icon-[name]`. With this method, the icon's color still changes with the CSS `color` property, but the icon itself cannot change with the `--rvt-icon` CSS variable.

```html
<span class="rvt-icon">
  <svg>
    <use href="#rvt-icon-heart"></use>
  </svg>
</span>
```

## Use external SVG symbols

If wanting to use `rivet-icons.svg` (rather than `rivet-icons.js` or `rivet-icons.html`), link to `rivet-icons.css` and optionally use the [`svg4everybody`](https://github.com/jonathantneal/svg4everybody) polyfill to support Internet Explorer.

```html
<link href="path/to/rivet-icons.css" rel="stylesheet">
```

```html
<span class="rvt-icon">
  <svg>
    <use href="path/to/rivet-icons.svg#rvt-icon-heart"></use>
  </svg>
</span>
```

## Use inline SVG

Icons can be placed inline in HTML. Copy and paste the contents of any inline icon (`rvt-icon-[name].html`) in the page and link to `rivet-icons.css`.

```html
<link href="path/to/rivet-icons.css" rel="stylesheet">
```

```html
<span class="rvt-icon">
  <!-- Paste `rvt-icon-heart.html` here. -->
</span>
```

If the development environment allows it, prefer to import individual icons, rather than copying and pasting them. This example is how it could be done with React, with the right build configurations.

```jsx
import 'rivet-icons/dist/rivet-icons.css'
import heart from 'rivet-icons/dist/rvt-icon-heart.html'

const HeartIcon = (
  <span
    className='rvt-icon'
    dangerouslySetInnerHTML={{ __html: heart }} />
)
```

Inline icons (`rvt-icon-[name].html`) are identical to the source icons (`rvt-icon-[name].svg`) except for the removal of some SVG attributes, given the context of use. [`xmlns` is not needed in HTML documents](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg). `width` and `height` is set with the `.rvt-icon` class.

## Change icon color

The icon color is inherited through the `color` property. It behaves just like text color.

```html
<rvt-icon name="heart" class="color-red"></rvt-icon>
```

```css
.color-red {
  color: red;
}
```

## Change icon size

Icons are sized at 16 square pixels, but the padding and margins can be adjusted to fit into other contexts. For example, to increase the dimensions to 24 square pixels (while keeping the icon at its current scale), add `0.25rem` (`4px`) padding to the icon. This can be done with [Rivet spacing utility classes](https://rivet.iu.edu/components/layout/spacing/).

```html
<!-- 16x16 -->
<rvt-icon></rvt-icon>
<span class="rvt-icon"></span>

<!-- 24x24 -->
<rvt-icon class="rvt-p-all-xxs"></rvt-icon>
<span class="rvt-icon rvt-p-all-xxs"></span>

<!-- 32x32 -->
<rvt-icon class="rvt-p-all-xs"></rvt-icon>
<span class="rvt-icon rvt-p-all-xs"></span>
```

## Build a custom icon set

The Rivet icon set includes dozens of icons. If only a few icons or custom icons are needed, then build a custom icon set. After [installing the `rivet-icons` package](#install), write a Node script to build the icons.

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
// ./build/rivet-icons.css
// ./build/rivet-icons.html
// ./build/rivet-icons.js
// ./build/rivet-icons.svg
// ./build/rvt-icon-[name].html
// ./build/rvt-icon-[name].svg
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
1. Expand all strokes and merge/flatten artwork in to one group.
1. Export the icon as an `.svg` to the `./src` folder. Open `File` > `Export` > `Export for Screens…`. Select the `./src` folder as the destination and the relevant artboard.
1. [Run the docs site](#run-the-docs-site) to build the new icon set and preview the new icon.
1. Open a pull request against `develop`.

## Run the docs site

To run the docs site locally, clone or download this repo.

Install dependencies.

```
npm install
```

Build the site and start a local development server.

```
npm run start
```

[Open the browser to localhost](http://localhost:8080/).

```
http://localhost:8080/
```

## Deploy the docs site

**Note:** This feature is for organization members only.

Build and deploy the docs to the [docs site](https://indiana-university.github.io/rivet-icons/), via the [GitHub Pages branch](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages) (`gh-pages`).

```
npm run deploy
```
