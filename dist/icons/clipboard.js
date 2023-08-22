import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'clipboard';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 7h6v2H5V7Zm0 3h6v2H5v-2Z"/>
  <path d="M6 0a2 2 0 0 0-2 2H1v14h14V2h-3a2 2 0 0 0-2-2H6ZM3 4h1v1h8V4h1v10H3V4Zm3-1V2h4v1H6Z"/>
</svg>
`;

registerIcon(name, svg);
