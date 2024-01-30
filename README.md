# Rivet Icons

[Icons](https://rivet.iu.edu/icons/) for Indiana University's Rivet Design System.

## Contents

1. [Usage](#usage)
1. [HTML API](#html-api)
1. [CSS API](#css-api)
1. [JavaScript API](#javascript-api)
1. [Request a new icon](#request-a-new-icon)
1. [Run the docs site](#run-the-docs-site)

## Usage

### Development

For development or prototyping, link to the Rivet Icon Element styles and the bundle containing all the icons in the set in the page. These files can be referenced from a service like [UNPKG](https://unpkg.com/browse/rivet-icons/).

```html
<!doctype html>
<html lang="en">
	<head>
		<link rel="stylesheet" href="https://unpkg.com/rivet-icons/dist/rivet-icon-element.css">
		<script type="module" src="https://unpkg.com/rivet-icons/dist/rivet-icons.js"></script>
	</head>
	<body>
		<rvt-icon name="heart"></rvt-icon>
		<rvt-icon name="heart-solid"></rvt-icon>
	</body>
</html>
```

### Production

For production, first install the npm package.

```
npm install --save rivet-icons
```

Create a custom module which imports only the icons needed. The icon module name (such as `./dist/heart.js`) matches its corresponding SVG file name (such as `./src/icons/heart.svg`).

```js
// ./src/icons.js
import 'rivet-icons/dist/heart.js';
import 'rivet-icons/dist/heart-solid.js';
```

Link to the Rivet Icon Element styles and the custom module in the page. 

```html
<!doctype html>
<html lang="en">
	<head>
		<link rel="stylesheet" href="./node_modules/rivet-icons/dist/rivet-icon-element.css">
		<script type="module" src="./src/icons.js"></script>
	</head>
	<body>
		<rvt-icon name="heart"></rvt-icon>
		<rvt-icon name="heart-solid"></rvt-icon>
	</body>
</html>
```

### Accessibility

Icons are considered decorative images. They are hidden from screen readers via `<svg aria-hidden="true">`. However, [text alternatives should still be provided](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) wherever icons are used.

In this first example, the link text of "Favorites" is presented to all users. The icon acts as a visual anchor and perhaps a legend to the rest of the page. Providing an accessible description of the icon itself (in addition to the link text) provides little value and may be undesired.

```html
<a href="/favorites">
	<rvt-icon name="heart"></rvt-icon>
	Favorites
</a>
```

In this second example, this icon is used to visually indicate the pressed state of the button. It is "heart" if the button is not pressed. It is "heart-solid" if the button is pressed. `aria-pressed` communicates the necessary information to screen readers. This attribute value changes the icon via the [CSS API](#--name-variable) in order to communicate equivalent information to visual users.

```html
<button aria-pressed="true" class="favorite">
	<rvt-icon></rvt-icon>
	Favorite
</button>
```

If a visual label is not desired (because the icon itself may be sufficient for the context), the text label should still be available to screen readers. Wrap the label with the [`.rvt-sr-only` class](https://rivet.uits.iu.edu/utilities/visibility/).

```html
<button aria-pressed="true" class="favorite">
	<rvt-icon></rvt-icon>
	<span class="rvt-sr-only">Favorite</span>
</button>
```

## HTML API

### `name` attribute

Use the `name` attribute to declare the icon to be rendered. The name of an icon matches its corresponding SVG file name (`./src/icons/*.svg`).

```html
<rvt-icon name="heart"></rvt-icon>
```

## CSS API

### `--name` variable

Change the icon in CSS by setting the `--name` variable on the `rvt-icon` element to the desired icon name, such as `var(--heart)` for the "heart" icon.

In this example, the button toggles the value of `aria-pressed` for screen reader users, while the icon updates between the solid heart and outlined heart for visual users.

```html
<button aria-pressed="true" class="favorite">
	<rvt-icon></rvt-icon>
	Favorite
</button>
<style>
.favorite[aria-pressed="false"] > rvt-icon {
	--name: var(--heart);
}
.favorite[aria-pressed="true"] > rvt-icon {
	--name: var(--heart-solid);
}
</style>
```

The `--name` CSS variable declaration overrides the `name` HTML attribute. In this case, the icon will render as `heart-solid`, not `heart`.

```html
<rvt-icon name="heart" class="heart-solid"></rvt-icon>
<style>
.heart-solid {
	--name: var(--heart-solid);
}
</style>
```

### `color` property

Change the icon color with the CSS `color` property. It is recommended to use the [`.rvt-color-*` utility classes](https://rivet.uits.iu.edu/utilities/color/).

```html
<rvt-icon name="heart" class="rvt-color-orange"></rvt-icon>
```

### `padding`, `height`, and `width` properties

The dimensions of the `rvt-icon` element can be changed by setting its `padding`, `height`, and `width` properties. This will not affect the scale of the underlying SVG content, which is fixed at 16 square pixels. For example, to increase the dimensions to 24 square pixels, add `0.25rem` (`4px`) padding to the `rvt-icon`. This can be done with [Rivet spacing utility classes](https://rivet.uits.iu.edu/utilities/spacing/).

```html
<!-- 16x16 -->
<rvt-icon></rvt-icon>

<!-- 24x24 -->
<rvt-icon class="rvt-p-all-xxs"></rvt-icon>

<!-- 32x32 -->
<rvt-icon class="rvt-p-all-xs"></rvt-icon>
```

## JavaScript API

### `registerIcon()` function

If the provided icon set does not have an icon you need, first [request a new icon](#request-a-new-icon) from the Rivet team.

If you must proceed with designing your own SVG icon, follow these specifications so they best align with the provided icon set:

- 16&times;16px grid
- 2px stroke for all icon outlines
- Expand all strokes before exporting and merge/flatten artwork in to one group.
- Set `fill` attribute to `currentColor` on exported SVGs.

Use the `registerIcon()` function to register the name and SVG code for this custom icon. Then, it can be used like any of the provided icons.

```js
// ./src/icon-diamond.js
import { registerIcon } from 'rivet-icons';

const name = 'diamond';
const svg = `<svg><polyline points="8,2 14,8 8,14 2,8" /></svg>`;

registerIcon(name, svg);
```

If left unspecified, the `<svg>` will default to the following attributes when rendered:

```html
<svg
	aria-hidden="true"
	fill="currentColor"
	focusable="false"
	height="16"
	viewBox="0 0 16 16"
	width="16"
	xmlns="http://www.w3.org/2000/svg"
>
```

Include this custom icon in the module for the custom icon set.

```diff
// ./src/icons.js
import 'rivet-icons/dist/heart.js';
import 'rivet-icons/dist/heart-solid.js';
+ import './icon-diamond.js';
```

### `name` and `svg` values

Icon modules export their name and SVG contents as string values.

```js
import { name, svg } from 'rivet-icons/dist/heart.js';
```

## Request a new icon

[Submit a Rivet support request](https://rivet.uits.iu.edu/help/#support-request-form) to request a new icon.

## Run the docs site

To run the docs site locally, clone or download this repo.

Install dependencies.

```
npm install
```

Build the site and start the local development server.

```
npm run start
```
