import { registerIcon } from './rivet-icon-element.js';

export const name = 'grid-vertical';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 1v2H3V1h2Zm4 2V1H7v2h2Zm4 0V1h-2v2h2Zm0 4V5h-2v2h2ZM9 5v2H7V5h2ZM5 7V5H3v2h2Zm8 2v2h-2V9h2Zm0 6v-2h-2v2h2ZM9 9v2H7V9h2Zm0 6v-2H7v2h2ZM5 9v2H3V9h2Zm0 6v-2H3v2h2Z"/>
</svg>
`;

registerIcon(name, svg);
