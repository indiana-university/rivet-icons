import { registerIcon } from '../rivet-icon-element.js';

export const name = 'building';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5 4h2v2H5V4Zm6 0H9v2h2V4ZM5 7h2v2H5V7Zm6 0H9v2h2V7Z"/>
  <path d="M2 0h12v14h1v2H1v-2h1V0Zm2 14h3v-2a1 1 0 1 1 2 0v2h3V2H4v12Z"/>
</svg>
`;

registerIcon(name, svg);
