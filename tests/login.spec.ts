import { test, expect } from '@testdino/playwright';
import { LoginPage } from '../Pages/LoginPage';

test('Login Test with valid user credentials', {
  annotation: {
    type: 'testdino:notify-slack',
    description: '#e2e-alerts',
  },
}, async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    'bhavymangukiya30@gmail.com',
    'Bhavy@207'
  );

  await expect(
    page.locator('a[href="/logout"]')
  ).toBeVisible({
    timeout: 20000
  });

});
