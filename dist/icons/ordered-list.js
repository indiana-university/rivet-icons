import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'ordered-list';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M2 1h3v6H3V3H2V1Zm6 4h7V3H8v2Zm0 8h7v-2H8v2ZM2 9h4v1.236L4.618 13H6v2H2v-1.236L3.382 11H2V9Z"/>
</svg>
`;

registerIcon(name, svg);
