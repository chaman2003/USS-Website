import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Most tests run in Node; the contact form test opts into a DOM
    // environment via a `// @vitest-environment happy-dom` file comment.
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
