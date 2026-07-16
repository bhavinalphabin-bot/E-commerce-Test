// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: 'utils/.env' });

const isCI = !!process.env.CI;

// Use the GitHub Actions run identifier in CI so all shards share one run,
// and fall back to a date-based id for local runs.
const ciRunId = isCI
  ? `ci-run-${process.env.GITHUB_RUN_ID}-${process.env.GITHUB_RUN_ATTEMPT || 1}`
  : `local-run-${new Date().toISOString().split('T')[0]}`;

export default defineConfig({
  testDir: './tests',
  snapshotDir: './__screenshots__',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 0 : 2,
  workers: isCI ? 5 : 5,

  timeout: 30 * 1000,
  expect: {
    timeout: 10 * 1000,
  },

  reporter: [
    ['@testdino/playwright', {
      serverUrl: 'https://stg-analytics.testdino.com',
      token: process.env.TESTDINO_TOKEN,
      ciRunId,
      debug: process.env.TESTDINO_DEBUG === 'true',
      artifacts: true,
      coverage: {
        // v2.0.0 generates its local HTML report in ./coverage automatically.
        enabled: true,
      },
    }],
    ['html', { outputDir: './playwright-report' }],
    ['json', { outputFile: './playwright-report/report.json' }],
    ['blob', { outputDir: 'blob-report' }],
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://storedemo.testdino.com/products',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15 * 1000,
    navigationTimeout: 30 * 1000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
   },
   
  ],
});
