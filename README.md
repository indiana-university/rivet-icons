# Rivet Icons

Icons for the [Rivet Design System](https://rivet.iu.edu/).

[**View Demo**](https://rivet.iu.edu/icons/)

## Contents

1. [Quick start](#quick-start)
1. [Repo structure](#repo-structure)
1. [Install](#install)
1. [Getting started](#getting-started)
1. [Usage](#usage)
1. [Use the icon element](#use-the-icon-element)
1. [Use internal SVG symbols](#use-internal-svg-symbols)
1. [Use external SVG symbols](#use-external-svg-symbols)
1. [Use inline SVG](#use-inline-svg)
1. [Change icon color](#change-icon-color)
1. [Change icon size](#change-icon-size)
1. [Accessibility](#accessibility)
1. [Make a custom icon set](#make-a-custom-icon-set)
1. [Add a custom icon](#add-a-custom-icon)
1. [Request a new icon](#request-a-new-icon)
1. [Icon specifications](#icon-specifications)
1. [Run the docs site](#run-the-docs-site)

## Quick start

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
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
| `./dist` | Production files (HTML, JS, SVG). |
| `./src` | Source SVG files. |

## Install

Install the package to import production files.

```
npm install --save rivet-icons
```

This package can also be [browsed and linked to through UNPKG](https://unpkg.com/browse/rivet-icons/).

## Getting started

Rendering icons requires up to three pieces of content: CSS styles, SVG images, and optionally the Rivet Icon Element.

The easiest way to incorporate these parts is to link to them in the `<head>` of the page.

```html
<link rel="stylesheet" href="path/to/rivet-icons.css">
<script defer src="path/to/rivet-icons.js"></script>
<script type="module" src="path/to/rivet-icon-element.js"></script>
```

`rivet-icons.css` loads the required styles. `rivet-icons.js` appends the SVG images as internal [SVG symbols](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol) in the `<body>`. The [`defer` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer) means that the symbols file will be requested immediately, but it won't block rendering the rest of the page. `rivet-icon-element.js` loads the `<rvt-icon>` [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) as a convenience for using these icons, although it is optional. The [`type="module"` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type) will cause the script to load just like using the `defer` attribute, but it also will be ignored by older browsers, such as Internet Explorer. In such a case, `<rvt-icon>` would look and behave just like an empty `<span>` element.

If the build process allows, embed `rivet-icons.html` in the page in replacement of linking to `rivet-icons.js`. This avoids a use of JavaScript and saves a network request, at the expense of browser caching. This technique may be preferred if only a few icons are used on an independent page.

If [external SVG symbols are used](#use-external-svg-symbols), then `rivet-icons.svg` will be used instead of `rivet-icons.js` or `rivet-icons.html`.

## Usage

Once the icon files are loaded in the page, choose a way to use the icons.

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
| Requires `rivet-icons.css` | Yes | Yes | Yes | Yes |
| Requires `rivet-icons.js` or `rivet-icons.html` | Yes | Yes | No | No |
| Requires `rivet-icons.svg` | No | No | Yes | No |
| Requires `rivet-icon-element.js` | Yes | No | No | No |
| Requires `rvt-icon-*.svg` or `rvt-icon-*.html` | No | No | No | Yes |

1. Latest browser versions of Chrome, Edge, Firefox, and Safari.
1. Internet Explorer does not support [custom elements](https://caniuse.com/custom-elementsv1) or [CSS variables](https://caniuse.com/css-variables).
1. Internet Explorer does not support [SVG external content](https://caniuse.com/mdn-svg_elements_use_external_uri). Use the [`svg4everybody` polyfill](https://github.com/jonathantneal/svg4everybody) to provide support.
1. Icons inherit their color from the CSS `color` property.

## Use the icon element

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
  <rvt-icon class="favorite__icon"></rvt-icon>
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

## Use inline SVG

Icons can be placed inline in HTML. Copy and paste the contents of any inline icon (`rvt-icon-[name].html`) in the page.

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

Inline icons (`rvt-icon-[name].html`) are identical to the source icons (`rvt-icon-[name].svg`) except for changing some SVG attributes, given the context of use. [`xmlns` is not needed in HTML documents](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg). `width` and `height` are set with the `.rvt-icon` class. `aria-hidden` is added, as icons are decorative images.

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

Icons are sized at 16 square pixels, but padding and margin can be adjusted to fit into other contexts. For example, to increase the dimensions to 24 square pixels (while keeping the icon at its current scale), add `0.25rem` (`4px`) padding to the icon. This can be done with [Rivet spacing utility classes](https://rivet.iu.edu/components/layout/spacing/).

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

## Make a custom icon set

```js
import 'rvt-icon/dist/arrow-down.js';
import 'rvt-icon/dist/arrow-up.js';
import 'rvt-icon/dist/building.js';
import 'rvt-icon/dist/map-pin.js';
```

## Add a custom icon

```js
import { registerIcon } from 'rvt-icon/lib/rivet-icon-element.js';

const name = 'dot';
const svg = ``;

registerIcon(name, svg);
```

## Request a new icon

[Submit a new issue](https://github.com/indiana-university/rivet-icons/issues/new) to request a new icon. Include anything that may help to visually describe this new icon, such as examples from other icon sets, examples of usage in various apps or websites, the SVG source code of the icon, or even a sketch.

## Icon specifications

Each icon is drawn to the following specifications:

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
