import { registerIcon } from './rivet-icon-element.js';

export const name = 'pin-solid';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M13 0H3v1c0 1.173.294 2.075.606 2.697.137.275.277.493.394.656v2.175A5.987 5.987 0 0 0 2 11v1h5v3a1 1 0 1 0 2 0v-3h5v-1a5.987 5.987 0 0 0-2-4.472V4.353c.117-.163.257-.381.394-.656C12.706 3.075 13 2.173 13 1V0Z"/>
</svg>
`;

registerIcon(name, svg);
