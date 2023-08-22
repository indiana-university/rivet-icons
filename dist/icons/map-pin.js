import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'map-pin';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 6.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
  <path d="M7.193 15.162a18.223 18.223 0 0 1-2.666-2.283C3.1 11.386 1.5 9.145 1.5 6.5 1.5 3.245 4.141 0 8 0s6.5 3.245 6.5 6.5c0 2.645-1.6 4.886-3.027 6.379a18.22 18.22 0 0 1-2.666 2.283c-.263.183-.536.351-.807.523-.27-.172-.544-.34-.807-.523ZM8 2C5.359 2 3.5 4.232 3.5 6.5c0 1.855 1.15 3.614 2.473 4.996A16.217 16.217 0 0 0 8 13.28a16.22 16.22 0 0 0 2.027-1.783C11.35 10.114 12.5 8.356 12.5 6.5 12.5 4.232 10.641 2 8 2Z"/>
</svg>
`;

registerIcon(name, svg);
