# Migration (v2 to v3)

Rivet Icons v2 provided many integration options, but this flexibility also meant it was confusing and complicated to get started. In v3, the focus is providing a better developer experiencing centered around the `<rvt-icon>` custom element.

## Breaking changes

### Removed: `rivet-icons.css`

The global `.rvt-icon` CSS class is no longer available. If needed, include the following styles in your project.

```css
.rvt-icon {
	display: inline-flex;
}
.rvt-icon > svg {
	height: 1rem;
	width: 1rem;
}
```

All required styles are now included in the Rivet Icon Element (`<rvt-icon>`).

### Removed: Inclusion of the `dist` folder in the repo

The `dist` folder was originally committed to the repository as a way to make it easier for users to see the generated files. However, this makes commits larger and obscures meaninful changes to the repo.

Instead, use a service like UNPKG to browse the [Rivet Icons npm package](https://www.unpkg.com/browse/rivet-icons/).
