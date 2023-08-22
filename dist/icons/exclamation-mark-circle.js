import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'exclamation-mark-circle';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 9V4h2v5H7Zm1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"/>
</svg>
`;

registerIcon(name, svg);
