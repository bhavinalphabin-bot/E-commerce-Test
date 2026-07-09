import { test, expect } from '@playwright/test';

test('TestDino trace artifact intentionally fails', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Intentional TestDino Trace Failure' })).toBeVisible();
});
