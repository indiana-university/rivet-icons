import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'filter';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6 1a3.001 3.001 0 0 0-2.83 2H0v2h3.17a3.001 3.001 0 0 0 5.66 0H16V3H8.83A3.001 3.001 0 0 0 6 1ZM5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm5 5a3.001 3.001 0 0 0-2.83 2H0v2h7.17a3.001 3.001 0 0 0 5.66 0H16v-2h-3.17A3.001 3.001 0 0 0 10 9Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
</svg>
`;

registerIcon(name, svg);
