import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'chat';
export const svg = `<svg><path d="M5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path d="M16 1H0v12h3.586L6 15.414 8.414 13H16V1ZM2 11V3h12v8H7.586L6 12.586 4.414 11H2Z"/></svg>`;

registerIcon(name, svg);
