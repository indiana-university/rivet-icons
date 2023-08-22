import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'thumbs-down';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1.617 1H16v9h-4.323l-2 5H8a3 3 0 0 1-3-3v-1H2.633A2 2 0 0 1 .648 8.752L1.618 1ZM12 8h2V3h-2v5Zm-2-5H3.383l-.75 6H7v3a1 1 0 0 0 1 1h.323L10 8.807V3Z"/>
</svg>
`;

registerIcon(name, svg);
