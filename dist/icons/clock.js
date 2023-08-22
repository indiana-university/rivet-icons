import { registerIcon } from '../rivet-icon-element.js';

export const name = 'clock';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 7.586V4H7v4.414l2.5 2.5L10.914 9.5 9 7.586Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z"/>
</svg>
`;

registerIcon(name, svg);
