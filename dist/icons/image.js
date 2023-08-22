import { registerIcon } from '../rivet-icon-element.js';

export const name = 'image';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M15 1H1v14h14V1ZM3 6.92V3h10v7.132l-1.928-1.286-1.914.957-4.624-4.11L3 6.918Zm7.928 4.234L13 12.535V13H3V9.48l1.466-1.172 4.376 3.89 2.086-1.044Z"/>
</svg>
`;

registerIcon(name, svg);
