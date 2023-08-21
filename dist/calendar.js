import { registerIcon } from './rivet-icon-element.js';

export const name = 'calendar';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 9.5v2H5v-2h2Zm4 2v-2H9v2h2Z"/>
  <path d="M5 0a1 1 0 0 1 1 1v1h4V1a1 1 0 1 1 2 0v1h3v13H1V2h3V1a1 1 0 0 1 1-1ZM3 4v2h10V4H3Zm10 4H3v5h10V8Z"/>
</svg>
`;

registerIcon(name, svg);
