import { registerIcon } from './rivet-icon-element.js';

export const name = 'neutral-solid';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm11-2a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-6.5 4a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-5a1 1 0 0 0-1 1ZM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>
`;

registerIcon(name, svg);
