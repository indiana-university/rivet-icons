import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'bell';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 14h5.5v-2h-1.382l-.366-.733a2.86 2.86 0 0 1-.298-1.12l-.234-4.209A5.23 5.23 0 0 0 9 1.096V0H7v1.096a5.23 5.23 0 0 0-4.22 4.842l-.234 4.209a2.86 2.86 0 0 1-.298 1.12L1.882 12H.5v2H6a2 2 0 1 0 4 0Zm1.886-2H4.114a4.86 4.86 0 0 0 .429-1.742l.234-4.209a3.228 3.228 0 0 1 6.446 0l.234 4.209A4.86 4.86 0 0 0 11.886 12Z"/>
</svg>
`;

registerIcon(name, svg);
