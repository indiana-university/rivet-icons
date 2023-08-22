import { registerIcon } from '../rivet-icon-element.js';

export const name = 'grid';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 0H0v7h7V0ZM2 5V2h3v3H2Zm14-5H9v7h7V0Zm-5 5V2h3v3h-3ZM9 9h7v7H9V9Zm2 2v3h3v-3h-3ZM7 9H0v7h7V9Zm-5 5v-3h3v3H2Z"/>
</svg>
`;

registerIcon(name, svg);
