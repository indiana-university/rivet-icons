import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'bus';
export const svg = `<svg><path d="M15 0H1v14h2v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V14h2V0ZM3.5 2h9a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5ZM5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>`;

registerIcon(name, svg);
