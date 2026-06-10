import { test } from '@playwright/test';

import { LoginPage } from '../Pages/LoginPage';
import { ProductPage } from '../Pages/ProductPage';
import { CartPage } from '../Pages/CartPage';
import { CheckoutPage } from '../Pages/CheckoutPage';

test('Complete Checkout Flow',
async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();

  await loginPage.login(
    'bhavymangukiya30@gmail.com',
    'Bhavy@207'
  );

  await page.goto(
    'https://automationexercise.com'
  );

  await productPage.openProducts();

  await productPage.searchProduct('Men Tshirt');

  await productPage.addFirstProductToCart();

  await cartPage.openCart();

  await checkoutPage.proceedToCheckout();

  await checkoutPage.placeOrder();

  await checkoutPage.enterPaymentDetails();

  await checkoutPage.submitOrder();
});