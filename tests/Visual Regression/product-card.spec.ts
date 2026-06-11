import { test, expect } from '@playwright/test';

test.skip((globalThis as any).process?.env?.CI, 'Visual snapshots run locally only');

test('product card matches snapshot', async ({ page }) => {
  await page.goto('https://automationexercise.com/products');

  const card = page.locator('.product-image-wrapper').first();

  await expect(card).toHaveScreenshot({
    maxDiffPixels: 50
  });
});