const { test, expect } = require('@playwright/test');

test('Automation Exercise purchase flow', async ({ page }) => {

  // Home page
  await page.goto('https://automationexercise.com');

  // Login
  await page.getByRole('link', { name: /signup\s*\/\s*login/i }).click();

  await page.getByRole('textbox', { name: /email address/i })
    .first()
    .fill('bhavymangukiya30@gmail.com');

  await page.getByRole('textbox', { name: /password/i })
    .fill('Bhavy@207');

  await page.getByRole('button', { name: /login/i }).click();

  // Verify login
  await expect(page.getByText(/logged in as/i)).toBeVisible();

  // Go to products
  await page.getByRole('link', { name: /products/i }).click();

  // Search product
  await page.locator('#search_product').fill('Blue Top');
  await page.locator('#submit_search').click();

  // Verify search result
 // await expect(page.getByText('Blue Top')).toBeVisible();

  // Add to cart
  await page.getByText('Add to cart').first().click();

  // View cart
  await page.getByText('View Cart').click();

  // Checkout
  await page.getByText('Proceed To Checkout').click();

  // Verify checkout page
 // await expect(page.getByText(/address details/i)).toBeVisible();
  // await page.locator('message').fill('Wrap it as Gift!!');
  await page.getByText('Place Order').click();
});
