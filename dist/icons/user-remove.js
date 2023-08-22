import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'user-remove';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 4a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM0 12a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4H0v-4Zm3-1a1 1 0 0 0-1 1v2h6v-2a1 1 0 0 0-1-1H3Zm7-3h6V6h-6v2Z"/>
</svg>
`;

registerIcon(name, svg);
