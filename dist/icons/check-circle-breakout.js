import { registerIcon } from '../rivet-icon-element.js';

export const name = 'check-circle-breakout';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2 8a6 6 0 0 1 8.57-5.423L11.43.77A8 8 0 1 0 16 8h-2A6 6 0 0 1 2 8Z"/>
  <path d="M8 11.414 15.914 3.5 14.5 2.086 8 8.586l-2-2L4.586 8 8 11.414Z"/>
</svg>
`;

registerIcon(name, svg);
