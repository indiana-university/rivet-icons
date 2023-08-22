import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'alarm-solid';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M.642 4.855A8.029 8.029 0 0 1 4.855.642 3 3 0 0 0 .642 4.855Zm14.716 0A3 3 0 0 0 11.145.642a8.029 8.029 0 0 1 4.213 4.213Z"/>
  <path d="M8 15a6.97 6.97 0 0 0 4.192-1.394l2.308 2.308 1.414-1.414-2.308-2.308a7 7 0 1 0-11.213 0L.087 14.5 1.5 15.914l2.308-2.308A6.969 6.969 0 0 0 8 15Zm2.414-6L9 10.414l-2-2V5h2v2.586L10.414 9Z"/>
</svg>
`;

registerIcon(name, svg);
