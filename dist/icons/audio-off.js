import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'audio-off';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="m9 16-5.333-4H0V4h3.667L9 0v16ZM4.333 6H2v4h2.333L7 12V4L4.333 6Zm7.253 2-1.5 1.5 1.414 1.414 1.5-1.5 1.5 1.5L15.914 9.5l-1.5-1.5 1.5-1.5L14.5 5.086l-1.5 1.5-1.5-1.5L10.086 6.5l1.5 1.5Z"/>
</svg>
`;

registerIcon(name, svg);
