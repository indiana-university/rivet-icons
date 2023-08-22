import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'link';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M12.243 3.757a2 2 0 0 0-2.829 0L7.293 5.88 5.879 4.464 8 2.344a4 4 0 0 1 5.657 0l.707.706-.09.09A4.002 4.002 0 0 1 13.658 8l-2.121 2.121-1.415-1.414 2.122-2.121a2 2 0 0 0 0-2.829Zm-8.486 8.486a2 2 0 0 0 2.829 0l2.121-2.122 1.414 1.415L8 13.655a4 4 0 0 1-5.657 0l-.707-.706.09-.09A4.002 4.002 0 0 1 2.342 8l2.121-2.121L5.88 7.293 3.757 9.414a2 2 0 0 0 0 2.829Z"/>
  <path d="M10.828 6.586 9.414 5.172 5.172 9.414l1.414 1.414 4.242-4.242Z"/>
</svg>
`;

registerIcon(name, svg);
