import { registerIcon } from './rivet-icon-element.js';

export const name = 'pin';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3 0h10v1c0 1.173-.294 2.075-.606 2.697a4.748 4.748 0 0 1-.394.656v2.175A5.987 5.987 0 0 1 14 11v1H9v3a1 1 0 1 1-2 0v-3H2v-1c0-1.778.774-3.375 2-4.472V4.353a4.758 4.758 0 0 1-.394-.656C3.294 3.075 3 2.173 3 1V0Zm2.11 2c.076.332.183.6.284.803a2.699 2.699 0 0 0 .316.492.545.545 0 0 0 .006.006L6 3.586v3.913l-.4.3A4.002 4.002 0 0 0 4.127 10h7.748A4.002 4.002 0 0 0 10.4 7.8l-.4-.3V3.585l.284-.284.006-.007a2.694 2.694 0 0 0 .315-.492c.102-.204.209-.47.285-.803H5.11Z"/>
</svg>
`;

registerIcon(name, svg);
