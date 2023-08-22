import { registerIcon } from '../../lib/rivet-icon-element.js';

export const name = 'data';
export const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M1 4C1 2.589 2.118 1.58 3.31.984 4.562.358 6.222 0 8 0c1.778 0 3.438.358 4.69.984C13.882 1.58 15 2.59 15 4v8c0 1.411-1.118 2.42-2.31 3.016C11.438 15.642 9.778 16 8 16c-1.778 0-3.438-.358-4.69-.984C2.118 14.42 1 13.41 1 12V4Zm2 0c0 .246.225.737 1.205 1.227C5.125 5.687 6.465 6 8 6c1.535 0 2.876-.313 3.795-.773C12.775 4.737 13 4.246 13 4c0-.246-.225-.737-1.205-1.227C10.875 2.313 9.535 2 8 2c-1.535 0-2.876.313-3.795.773C3.225 3.263 3 3.754 3 4Zm0 6.85V12c0 .246.225.737 1.205 1.227.92.46 2.26.773 3.795.773 1.535 0 2.876-.313 3.795-.773.98-.49 1.205-.981 1.205-1.227v-1.15a6.394 6.394 0 0 1-.31.166C11.438 11.642 9.778 12 8 12c-1.778 0-3.438-.358-4.69-.984A6.335 6.335 0 0 1 3 10.85ZM13 8V6.85a6.492 6.492 0 0 1-.31.166C11.438 7.642 9.778 8 8 8c-1.778 0-3.438-.358-4.69-.984A6.431 6.431 0 0 1 3 6.85V8c0 .246.225.737 1.205 1.227.92.46 2.26.773 3.795.773 1.535 0 2.876-.313 3.795-.773C12.775 8.737 13 8.246 13 8Z"/>
</svg>
`;

registerIcon(name, svg);
