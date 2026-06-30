# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addToCart.spec.ts >> Add Product To Cart
- Location: tests/addToCart.spec.ts:6:5

# Error details

```
Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://automationexercise.com/
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This page isn’t working" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: automationexercise.com
      - text: is currently unable to handle this request.
    - generic [ref=e10]: HTTP ERROR 500
  - button "Reload" [ref=e13] [cursor=pointer]
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | import { ProductPage } from '../Pages/ProductPage';
  4  | import { CartPage } from '../Pages/CartPage';
  5  | 
  6  | test('Add Product To Cart', async ({ page }) => {
  7  | 
  8  |   const productPage = new ProductPage(page);
  9  |   const cartPage = new CartPage(page);
  10 | 
> 11 |   await page.goto(
     |              ^ Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://automationexercise.com/
  12 |     'https://automationexercise.com'
  13 |   );
  14 | 
  15 |   await productPage.openProducts();
  16 | 
  17 |   await productPage.searchProduct('Men Tshirt');
  18 | 
  19 |   await productPage.addFirstProductToCart();
  20 | 
  21 |   await cartPage.openCart();
  22 | 
  23 |   await cartPage.verifyProduct('Men Tshirt');
  24 | });
```