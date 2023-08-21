import { registerIcon } from './rivet-icon-element.js';

export const name = 'shopping-bag';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4 4a4 4 0 1 1 8 0h4v12H0V4h4Zm0 2H2v8h12V6h-2v2h-2V6H6v2H4V6Zm6-2a2 2 0 1 0-4 0h4Z"/>
</svg>
`;

registerIcon(name, svg);
