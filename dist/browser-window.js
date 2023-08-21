import { registerIcon } from './rivet-icon-element.js';

export const name = 'browser-window';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
  <path d="M15 1H1v14h14V1ZM3 7V3h10v4H3Zm0 6V9h10v4H3Z"/>
</svg>
`;

registerIcon(name, svg);
