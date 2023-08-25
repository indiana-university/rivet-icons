import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'alarm';
export const svg = `<svg><path d="M4.855.642A8.029 8.029 0 0 0 .642 4.855 3 3 0 0 1 4.855.642Zm10.503 4.213A3 3 0 0 0 11.145.642a8.029 8.029 0 0 1 4.213 4.213ZM9 7.586V5H7v3.414l2 2L10.414 9 9 7.586Z"/><path d="M1 8a7 7 0 1 1 12.606 4.192l2.308 2.308-1.414 1.414-2.308-2.308A6.97 6.97 0 0 1 8 15a6.969 6.969 0 0 1-4.192-1.394L1.5 15.914.086 14.5l2.308-2.308A6.97 6.97 0 0 1 1 8Zm7-5a5 5 0 1 0 0 10A5 5 0 0 0 8 3Z"/></svg>`;

registerIcon(name, svg);
