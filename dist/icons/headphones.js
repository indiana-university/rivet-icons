import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'headphones';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0v8h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2A6 6 0 0 0 2 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H0V8Zm2 2v4h2v-4H2Zm12 0h-2v4h2v-4Z"/>
</svg>
`;

registerIcon(name, svg);
