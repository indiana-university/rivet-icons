import { registerIcon } from './rivet-icon-element.js';

export const name = 'grid-horizontal';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3 3H1v2h2V3Zm0 4H1v2h2V7Zm-2 4h2v2H1v-2Zm6-8H5v2h2V3ZM5 7h2v2H5V7Zm2 4H5v2h2v-2Zm2-8h2v2H9V3Zm6 0h-2v2h2V3ZM9 7h2v2H9V7Zm6 0h-2v2h2V7Zm-6 4h2v2H9v-2Zm6 0h-2v2h2v-2Z"/>
</svg>
`;

registerIcon(name, svg);
