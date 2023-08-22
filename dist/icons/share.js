import { registerIcon } from '../rivet-icon-element.js';

export const name = 'share';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M13 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 .917 2.16l-4.94 2.47a3.03 3.03 0 0 1 0 .74l4.94 2.47a3 3 0 1 1-.895 1.789l-4.94-2.47a3 3 0 1 1 0-4.319l4.94-2.47A3.023 3.023 0 0 1 10 3ZM3 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
</svg>
`;

registerIcon(name, svg);
