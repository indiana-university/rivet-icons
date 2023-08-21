import { registerIcon } from './rivet-icon-element.js';

export const name = 'copy';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M11 0H0v11h3V9H2V2h7v1h2V0Z"/>
  <path d="M16 5H5v11h11V5Zm-9 9V7h7v7H7Z"/>
</svg>
`;

registerIcon(name, svg);
