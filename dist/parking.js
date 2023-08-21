import { registerIcon } from './rivet-icon-element.js';

export const name = 'parking';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 4H5v8h2v-2h2a3 3 0 1 0 0-6Zm0 4H7V6h2a1 1 0 0 1 0 2Z"/>
  <path d="M15 1H1v14h14V1ZM3 13V3h10v10H3Z"/>
</svg>
`;

registerIcon(name, svg);
