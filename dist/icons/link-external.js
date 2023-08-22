import { registerIcon } from '../rivet-icon-element.js';

export const name = 'link-external';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M15 1H9v2h2.586l-3 3L10 7.414l3-3V7h2V1Z"/>
  <path d="M7 3H1v12h12V9h-2v4H3V5h4V3Z"/>
</svg>
`;

registerIcon(name, svg);
