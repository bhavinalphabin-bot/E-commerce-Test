import { defineConfig } from '@playwright/test';

export default defineConfig({
 workers: 4,
  testDir: './tests',

  use: {
    browserName: 'chromium',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  }
});