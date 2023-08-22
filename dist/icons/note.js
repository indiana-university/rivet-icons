import { registerIcon } from '../rivet-icon-element.js';

export const name = 'note';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 8H6V6h4v2Zm0 3H6V9h4v2Z"/>
  <path d="M10.414 1H2v14h12V4.586L10.414 1ZM4 13V3h5.586L12 5.414V13H4Z"/>
</svg>
`;

registerIcon(name, svg);
