import { registerIcon } from '../rivet-icon-element.js';

export const name = 'chevrons-right';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9.414 8 3 1.586 1.586 3l5 5-5 5L3 14.414 9.414 8Z"/>
  <path d="M15.414 8 9 1.586 7.586 3l5 5-5 5L9 14.414 15.414 8Z"/>
</svg>
`;

registerIcon(name, svg);
