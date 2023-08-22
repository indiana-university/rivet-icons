import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'audio';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10 0v5.401a2.999 2.999 0 0 1 0 5.198V16l-5.333-4H0V4h4.667L10 0ZM8 4 5.333 6H2v4h3.333L8 12V4Z"/>
  <path d="m13.6 3.2-.799-.6L11.6 4.199l.8.6a4 4 0 0 1 .8.802c.503.668.8 1.497.8 2.399 0 .902-.297 1.73-.8 2.4a4.03 4.03 0 0 1-.8.8l-.8.601 1.201 1.6.8-.601a6.028 6.028 0 0 0 1.198-1.2A5.977 5.977 0 0 0 16 8c0-1.35-.447-2.598-1.2-3.6a6.03 6.03 0 0 0-1.2-1.2Z"/>
</svg>
`;

registerIcon(name, svg);
