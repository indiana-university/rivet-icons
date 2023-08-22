import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'plus-circle-solid';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm7-4v3H4v2h3v3h2V9h3V7H9V4H7Z"/>
</svg>
`;

registerIcon(name, svg);
