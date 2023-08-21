import { registerIcon } from './rivet-icon-element.js';

export const name = 'star';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m8 .684 2.231 4.66 5.629.266-4.18 4.04 1.336 5.254L8 12.324l-5.016 2.58L4.32 9.65.14 5.61l5.629-.265L8 .684Zm0 4.632-.943 1.97-2.197.104 1.684 1.629-.528 2.077L8 10.076l1.984 1.02-.528-2.077 1.684-1.63-2.197-.103L8 5.316Z"/>
</svg>
`;

registerIcon(name, svg);
