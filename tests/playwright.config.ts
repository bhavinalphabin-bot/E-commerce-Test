import { defineConfig } from '@playwright/test';

export default defineConfig({
 workers: 1,
  testDir: './tests',
retries: 2,
  use: {
    browserName: 'chromium',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  }
});