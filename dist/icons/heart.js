import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'heart';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 5.5 6.32 3.82a2.375 2.375 0 0 0-3.358 3.36L8 12.216l5.038-5.038A2.375 2.375 0 1 0 9.68 3.821L8 5.5Zm0 9.546L1.548 8.594a4.375 4.375 0 0 1 6.187-6.188L8 2.672l.265-.266a4.375 4.375 0 1 1 6.187 6.188L8 15.046Z"/>
</svg>
`;

registerIcon(name, svg);
