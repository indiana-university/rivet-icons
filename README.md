# Rivet Icons

[Icons](https://rivet.iu.edu/icons-stickers/) (`16px` square) for Indiana University's Rivet Design System.

[Migrate from v2 to v3](MIGRATION.md).

## Contents

1. [Usage](#usage)
1. [HTML API](#html-api)
1. [CSS API](#css-api)
1. [JavaScript API](#javascript-api)
1. [Request a new icon](#request-a-new-icon)

## Usage

### Development

This approach is recommended for development, prototyping, or restrictive production environments.

Link to:

- The Rivet Icon Element styles (`./dist/rivet-icon-element.css`)
- The bundle containing all the icons (`./dist/rivet-icons.js`)

These files can be linked from a service like [UNPKG](https://unpkg.com/browse/rivet-icons/).

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

For production, install the npm package.

```
npm install --save rivet-icons
```

Create a custom module which imports only the icons needed. The icon module name (such as `./dist/heart.js`) matches its corresponding SVG file name (such as `./src/icons/heart.svg`).

```js
// ./src/icons.js
import 'rivet-icons/dist/heart.js';
import 'rivet-icons/dist/heart-solid.js';
```

Link to:

- The Rivet Icon Element styles (`./dist/rivet-icon-element.css`)
- The custom module (for example, `./src/icons.js`)

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

By default, stickers are considered decorative images and hidden from screen reader users.

Ask this question to test if alternative text is needed: "Would this content still make sense to sighted users if the icon was removed?" If no, then add alternative text using the Rivet class `rvt-sr-only`.

In this first example, the link text of "Favorites" is presented to all users. The icon acts as a visual anchor and perhaps a legend to the rest of the page. No additional accessible description is needed.

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

In this case, even if a text label for sighted users is not wanted, it is required for screen reader users.

```html
<button aria-pressed="true" class="favorite">
	<rvt-icon></rvt-icon>
	<span class="rvt-sr-only">Favorite</span>
</button>
```

### Testing

Download or clone this repo, then install dependencies.

```
npm install
```

Start the server to launch the local test environment.

```
npm run start
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

Change the icon color with the CSS `color` property. It is recommended to use the [Rivet color utility classes](https://rivet.uits.iu.edu/utilities/color/).

```html
<rvt-icon name="heart" class="rvt-color-orange"></rvt-icon>
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

## Request a new icon

[Submit a Rivet support request](https://rivet.uits.iu.edu/help/#support-request-form) to request a new icon.
