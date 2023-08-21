import { registerIcon } from './rivet-icon-element.js';

export const name = 'rss';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2 3c6.075 0 11 4.925 11 11h2C15 6.82 9.18 1 2 1v2Z"/>
  <path d="M2 5a9 9 0 0 1 9 9H9a7 7 0 0 0-7-7V5Zm4 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>
`;

registerIcon(name, svg);
