import { defineConfig } from '@playwright/test';

declare const process: {
  env: {
    CI?: string | undefined;
  };
};

export default defineConfig({
  workers: 4,

  testDir: './tests',

  retries: 2,

  use: {
    browserName: 'chromium',

    headless: false,

    screenshot: 'only-on-failure',
  },

  reporter: process.env.CI ? [['blob']] : [['html']],
});