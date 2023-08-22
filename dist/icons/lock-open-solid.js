import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'lock-open-solid';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M4 3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2V3Zm5 7a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1Z"/>
</svg>
`;

registerIcon(name, svg);