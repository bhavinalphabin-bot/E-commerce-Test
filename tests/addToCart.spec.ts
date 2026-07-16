import { test } from '@testdino/playwright';

import { ProductPage } from '../Pages/ProductPage';
import { CartPage } from '../Pages/CartPage';

test('Add Product To Cart', async ({ page }) => {

  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await page.goto(
    'https://automationexercise.com'
  );

  await productPage.openProducts();

  await productPage.searchProduct('Men Tshirt');

  await productPage.addFirstProductToCart();

  await cartPage.openCart();

  await cartPage.verifyProduct('Men Tshirt');
});
//doing for the PR
