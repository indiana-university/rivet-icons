# Migration (v2 to v3)

Rivet Icons v2 provided many integration options, but this flexibility also meant it was complicated and confusing to get started. Rivet Icons v3 provides a better developer experience by enhancing the `<rvt-icon>` custom element and removing redundant integration options.

## Repurposed: `rivet-icons.js`

This file would insert SVG icon symbols in the current document. It was a peer dependency when using the Rivet Icon Element (`<rvt-icon>`) or when using the [internal SVG symbols](https://github.com/indiana-university/rivet-icons/blob/v2.0.0/README.md#use-internal-svg-symbols) option.

This file still contains all icons, but it now also imports the Rivet Icon Element.

Instead of using the internal SVG symbols option, just use the Rivet Icon Element.

## Indirectly imported: `rivet-icon-element.js`

It was required to directly reference the `rivet-icon-element.js` file when using the Rivet Icon Element (`<rvt-icon>`). Now, it is indirectly imported through the icon modules.

## Renamed: `--rvt-icon`

The `--rvt-icon` CSS variable is used to dynamically change the icon with CSS. This has been renamed to `--name`, to match the `name` attribute of the Rivet Icon Element (`<rvt-icon name="heart">`).

## Renamed: `rivet-icons.css`

The `rivet-icons.css` file is renamed to `rivet-icon-element.css` so that it better corresponds to `rivet-icon-element.js`.

## Removed: `rivet-icons.svg`

This file was used for the [external SVG symbols](https://github.com/indiana-university/rivet-icons/blob/v2.0.0/README.md#use-external-svg-symbols) option.

Instead, use the Rivet Icon Element (`<rvt-icon>`).

## Removed: `rvt-icon-*.svg`

These SVG files were duplicates of the source files, with a different name.

Instead, directly refer to the source SVG files in the `./src/icons` folder.

## Removed: `rvt-icon-*.html`

These HTML files were used to [inline SVG icons](https://github.com/indiana-university/rivet-icons/blob/v2.0.0/README.md#use-inline-svg).

Instead, use the Rivet Icon Element (`<rvt-icon>`).

## Removed: `dist`

The `dist` folder will no longer be committed to the repo, but it is still included in the npm package.

Instead, browse the [Rivet Icons npm package](https://www.unpkg.com/browse/rivet-icons/) with a service like UNPKG or inspect the installed package in the `node_modules` folder.

## Removed: `buildIcons()`

The `buildIcons()` function was used to generate a custom icon set during build time.

Instead, custom icons sets are now generated during runtime. Include only the icons needed by importing their modules. Include custom icons by using the new `registerIcon()` function.
