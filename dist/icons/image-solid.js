import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'image-solid';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 1h14v14H1V1Zm11 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm-9 7h10v-.465l-2.072-1.381-2.086 1.043-4.376-3.89L3 9.482V13Z"/>
</svg>
`;

registerIcon(name, svg);
