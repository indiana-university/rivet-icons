import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'clock-solid';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm9-.414V4H7v4.414l2.5 2.5L10.914 9.5 9 7.586Z"/>
</svg>
`;

registerIcon(name, svg);
