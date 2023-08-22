import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'download';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 7.826V1H7v6.826L4.392 5.59 3.09 7.108 8 11.318l4.91-4.21-1.302-1.518L9 7.826Z"/>
  <path d="M3 13v-3H1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-2v3H3Z"/>
</svg>
`;

registerIcon(name, svg);
