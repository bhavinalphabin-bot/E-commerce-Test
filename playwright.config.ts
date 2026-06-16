import { defineConfig } from '@playwright/test';

declare const process: { env: { CI?: string } };

export default defineConfig({
  testDir: './tests',

  timeout: 60000,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : 4,

  use: {
    browserName: 'chromium',

    headless: process.env.CI ? true : false,

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    video: 'retain-on-failure',
  },
  // Add this in playwright.config.js|ts|mjs
reporter: [
  ['html', { outputDir: './playwright-report' }],
  ['json', { outputFile: './playwright-report/report.json' }],
]});