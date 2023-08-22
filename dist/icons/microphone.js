import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'microphone';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 0a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3ZM7 3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0V3Z"/>
  <path d="M8 11a4 4 0 0 1-4-4H2a6.002 6.002 0 0 0 5 5.917V14H5v2h6v-2H9v-1.083A6.002 6.002 0 0 0 14 7h-2a4 4 0 0 1-4 4Z"/>
</svg>
`;

registerIcon(name, svg);
