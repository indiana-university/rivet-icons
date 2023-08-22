import { registerIcon } from '../rivet-icon-element.js';

export const name = 'caution';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7 10V6h2v4H7Zm1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
  <path d="M6.382 0h3.236L16 12.764V16H0v-3.236L6.382 0Zm1.236 2L2 13.236V14h12v-.764L8.382 2h-.764Z"/>
</svg>
`;

registerIcon(name, svg);
