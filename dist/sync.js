import { registerIcon } from './rivet-icon-element.js';

export const name = 'sync';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8v1h.1A5.002 5.002 0 0 0 5 13v-2a3 3 0 0 1-.5-5.959v1.827L8.803 4 4.5 1.131v1.894A5 5 0 0 0 0 8Zm16 0V7h-.1A5.002 5.002 0 0 0 11 3h-1v2h1a3 3 0 0 1 .5 5.959V9.13L7.197 12l4.303 2.868v-1.893A5 5 0 0 0 16 8Z"/>
</svg>
`;

registerIcon(name, svg);
