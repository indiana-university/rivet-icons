## Rivet icons
Source files for the Rivet icon set

[**View Demo**](https://indiana-university.github.io/rivet-icons/)

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
1. Export the icon as an .svg with the strokes outlined and flattened into the `/src/svg` folder.
1. Type `npm run build` into your terminal to build the preview page. This will generate a preview for every file currently in the `/src/svg/` directory.
1. Follow the instructions below to run the the demo page locally and preview your new icon.
1. Open a pull request against `develop`.

#### Demo page
To run the demo site locally or make updates to the page you'll need to do the following.

Note: these instructions assume you have [NodeJS](https://nodejs.org/en/) and NPM installed on your computer.

1. Run `npm install` in your terminal to install the necessary dependencies.
1. Type `npm run start` to build a fresh copy of the demo site and start a local development server.
1. Navigate to `http://localhost:8080/` in your web browser to view the demo site.

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
