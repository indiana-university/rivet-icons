import { registerIcon } from './rivet-icon-element.js';

export const name = 'upload';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 4.174V11h2V4.174l2.608 2.236 1.302-1.518L8 .682l-4.91 4.21L4.392 6.41 7 4.174Z"/>
  <path d="M3 13v-3H1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-2v3H3Z"/>
</svg>
`;

registerIcon(name, svg);
