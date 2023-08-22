import { registerIcon } from '../rivet-icon-element.js';

export const name = 'question-mark-solid';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm5-1.5h2a.5.5 0 0 1 .5-.5h.646a.382.382 0 0 1 .17.724L7 7.382V9h2v-.382l.211-.106A2.382 2.382 0 0 0 8.146 4H7.5A2.5 2.5 0 0 0 5 6.5ZM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>
`;

registerIcon(name, svg);
