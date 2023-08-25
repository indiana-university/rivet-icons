# Rivet Icons

Icons for the [Rivet Design System](https://rivet.iu.edu/).

[**View Demo**](https://rivet.iu.edu/icons/)

## Contents

1. [Quick start](#quick-start)
1. [Repo structure](#repo-structure)
1. [Install](#install)
1. [Make a custom icon set](#make-a-custom-icon-set)
1. [Add a custom icon](#add-a-custom-icon)
1. [Usage](#usage)
1. [Change icon name in JavaScript](#change-icon-name-in-javascript)
1. [Change icon name in CSS](#change-icon-name-in-css)
1. [Change icon color](#change-icon-color)
1. [Change icon size](#change-icon-size)
1. [Flash of unstyled content](#flash-of-unstyled-content)
1. [Accessibility](#accessibility)
1. [Request a new icon](#request-a-new-icon)
1. [Icon specifications](#icon-specifications)
1. [Run the docs site](#run-the-docs-site)

## Quick start

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Rivet icon example</title>
		<script type="module" src="https://unpkg.com/rivet-icons@3/dist/bundle.js"></script>
	</head>
	<body>
		<rvt-icon name="heart"></rvt-icon>
	</body>
</html>
```

## Repo structure

The following are some notable contents in this repo.

| Path | Description |
| --- | --- |
| `./dist` | Production JavaScript modules. |
| `./src` | Source SVG files. |

## Install

Install this package by referencing it from a service like [UNPKG](https://unpkg.com/browse/rivet-icons/) or from a local installation with npm.

```
npm install --save rivet-icons
```

Link to the desired JavaScript modules inside of the HTML document's `<head>`. In the following example, replace "`/path/to/`" with the appropriate path to the modules.

```html
<!-- Option 1 (recommended): Make a custom icon set in a custom module. -->
<script type="module" src="/src/icons.js"></script>

<!-- Option 2: Include particular icons, if only a few icons are needed. -->
<script type="module" src="/path/to/rivet-icons/dist/icons/heart.js"></script>
<script type="module" src="/path/to/rivet-icons/dist/icons/heart-solid.js"></script>

<!-- Option 3: Include all icons in a single bundled file. -->
<script type="module" src="/path/to/rivet-icons/dist/bundle.js"></script>
```

## Make a custom icon set

The `bundle.js` file is ideal for prototyping, but it likely includes more icons than are needed for production. Instead of referencing each needed icon in HTML, it may be simpler to do so in a custom JavaScript module.

```html
<script type="module" src="/src/icons.js"></script>
```

```js
// /src/icons.js
import 'rvt-icon/dist/icons/heart.js';
import 'rvt-icon/dist/icons/heart-solid.js';
```

## Add a custom icon

Use the `registerIcon()` function to register the name and SVG code for a custom icon. Then, it can be used like any of the provided icons. Refer to the [icon specifications](#icon-specifications) section to learn how to design an icon that aligns with the Rivet icon set.

```js
// /src/icon-diamond.js
import { registerIcon } from 'rvt-icon';

const name = 'diamond';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><polyline points="8,2 14,8 8,14 2,8" /></svg>`;

registerIcon(name, svg);
```

Include this custom icon in the module for the custom icon set.

```diff
// /src/icons.js
import 'rvt-icon/dist/heart.js';
import 'rvt-icon/dist/heart-solid.js';
+ import './icon-diamond.js';
```

Once the icon is registered, a custom event (`rvtIconRegistered`) is dispatched to the `document`. The `name` of the icon is included in the [event detail property](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail).

```js
document.addEventListener('rvtIconRegistered', (event) => {
	console.log(event.detail.name);
	// "diamond"
});
```

Use the `getIcons()` function get an array of all registered icons.

```js
import { getIcons } from 'rvt-icon';

console.log(getIcons());
// ["heart", "heart-solid", "diamond"]
```

## Usage

Once icons are installed and registered, they can be rendered in HTML.

```html
<!-- Rivet icons -->
<rvt-icon name="heart"></rvt-icon>
<rvt-icon name="heart-solid"></rvt-icon>

<!-- Custom icon -->
<rvt-icon name="diamond"></rvt-icon>
```

## Change icon name in JavaScript

Use JavaScript to dynamically change the icon via the `name` attribute. This example uses JSX (React).

```jsx
const iconName = isFavorited ? 'heart-solid' : 'heart'
const icon = (<rvt-icon name={iconName} />)
```

## Change icon name in CSS

Use CSS to dynamically change the icon via the `--name` variable. Set its value to the CSS variable of the desired icon ("heart" is `var(--heart)`). In order to not pollute the global `:root` scope, icon variables are declared at the level of the `rvt-icon` element. That means, `--name` should only be used on the `rvt-icon` element itself, not on an ancestor.

In this example, the button toggles the value of `aria-pressed` for screen reader users, while the icon updates between the solid heart and outlined heart for visual users.

```html
<button aria-pressed="true" class="favorite">
	<rvt-icon></rvt-icon>
	Favorite
</button>
<style>
/* Do this. */
.favorite[aria-pressed="false"] > rvt-icon {
	--name: var(--heart);
}
.favorite[aria-pressed="true"] > rvt-icon {
	--name: var(--heart-solid);
}

/* This won't work. */
.favorite[aria-pressed="false"] {
	--name: var(--heart);
}
.favorite[aria-pressed="true"] {
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

## Change icon color

Change the icon color with the CSS `color` property. It is recommended to use the [`.rvt-color-*` utility classes](https://rivet.uits.iu.edu/utilities/color/).

```html
<rvt-icon name="heart" class="rvt-color-orange"></rvt-icon>
```

## Change icon size

Icons are sized at 16 square pixels, but padding and margin can be adjusted to fit into other contexts. For example, to increase the dimensions to 24 square pixels (while keeping the icon at its current scale), add `0.25rem` (`4px`) padding to the icon. This can be done with [Rivet spacing utility classes](https://rivet.iu.edu/components/layout/spacing/).

```html
<!-- 16x16 -->
<rvt-icon></rvt-icon>

<!-- 24x24 -->
<rvt-icon class="rvt-p-all-xxs"></rvt-icon>

<!-- 32x32 -->
<rvt-icon class="rvt-p-all-xs"></rvt-icon>
```

## Flash of unstyled content

"Flash of unstyled content" happens when `<rvt-icon>` is declared before the element definition is registered. This looks like the icon is briefly invisible, as if `display: none` is applied and suddenly removed. To avoid this, wait to render content until after the element registers with [`whenDefined()`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined).

```js
window.customElements.whenDefined('rvt-icon').then(() => {
	render();
});
```

## Accessibility

Icons are considered decorative images. They are hidden from screen readers via `<svg aria-hidden="true">`. However, [text alternatives should still be provided](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) wherever icons are used.

In this example, the link text of "Favorites" is presented to all users. The icon acts as a visual anchor and perhaps a legend to the rest of the page. Providing an accessible description of the icon itself (in addition to the link text) provides little value and may be undesired.

```html
<a href="/favorites">
	<rvt-icon name="heart"></rvt-icon>
	Favorites
</a>
```

Revisiting a previous example, this icon is used to visually indicate the pressed state of the button. It is "heart" if the button is not pressed. It is "heart-solid" if the button is pressed. `aria-pressed` communicates the necessary information to screen readers. This attribute value changes the icon via CSS in order to communicate equivalent information to visual users.

```html
<button aria-pressed="true" class="favorite">
	<rvt-icon class="favorite__icon"></rvt-icon>
	Favorite
</button>
```

If a visual label is not desired (because the icon itself may be sufficient for the context), the text label should still be available to screen readers. Wrap the label with the [`.rvt-sr-only` class](https://rivet.iu.edu/components/utilities/visibility/).

```html
<button aria-pressed="true" class="favorite">
	<rvt-icon class="favorite__icon"></rvt-icon>
	<span class="rvt-sr-only">Favorite</span>
</button>
```

Some older browsers could cause keyboard focus issues with SVG, but they are easy to work around. First, [add `<svg focusable="false">`](https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable) so the SVG does not gain focus in Internet Explorer and early versions of Edge. Second, [add whitespace around `<use>`](https://allyjs.io/tutorials/focusing-in-svg.html#the-use-element) so Safari 10 keeps all focusable elements tabbable. The `<rvt-icon>` element and the `rvt-icon-*.html` include these fixes.

## Request a new icon

[Submit a new issue](https://github.com/indiana-university/rivet-icons/issues/new) to request a new icon. Include anything that may help to visually describe this new icon, such as examples from other icon sets, examples of usage in various apps or websites, the SVG source code of the icon, or even a sketch.

## Icon specifications

Draw each icon to the following specifications:

- 16&times;16px grid
- 2px stroke for all icon outlines
- Expand all strokes before exporting and merge/flatten artwork in to one group.
- Set `fill` attribute to `currentColor` on exported SVGs.

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
