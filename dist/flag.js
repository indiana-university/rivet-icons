import { registerIcon } from './rivet-icon-element.js';

export const name = 'flag';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 1v1h9.387l-1.333 4 1.333 4H5v5H3V1h2Zm0 3v4h6.613l-.667-2 .667-2H5Z"/>
</svg>
`;

registerIcon(name, svg);
