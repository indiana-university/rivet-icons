import { registerIcon } from './rivet-icon-element.js';

export const name = 'inbox';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 4.086V0H7v4.086l-1.5-1.5L4.086 4 8 7.914 11.914 4 10.5 2.586 9 4.086ZM6 8H0v8h16V8h-6v2H6V8Zm6 4v-2h2v4H2v-4h2v2h8Z"/>
</svg>
`;

registerIcon(name, svg);
