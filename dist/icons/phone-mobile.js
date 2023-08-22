import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'phone-mobile';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6 13h4v-2H6v2Z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4Zm3.5 3h1a2 2 0 0 0 1.732-1H12v12H4V2h1.768A2 2 0 0 0 7.5 3Z"/>
</svg>
`;

registerIcon(name, svg);
