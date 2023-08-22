import { registerIcon } from '../rivet-icon-element.js';

export const name = 'lock-closed';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 10a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1Z"/>
  <path d="M7 0a3 3 0 0 0-3 3v2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2V3a3 3 0 0 0-3-3H7Zm3 5H6V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2Zm-6 9V7h8v7H4Z"/>
</svg>
`;

registerIcon(name, svg);
