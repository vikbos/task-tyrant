import '@testing-library/jest-dom';
import ResizeObserver from 'resize-observer-polyfill';

// Polyfill ResizeObserver for tests
if (typeof global.ResizeObserver === 'undefined') {
  global.ResizeObserver = ResizeObserver;
}