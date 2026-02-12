import '@testing-library/jest-dom'

// ResizeObserver polyfill for jsdom
global.ResizeObserver = class ResizeObserver {
  constructor(cb: any) {
    this.cb = cb
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}
