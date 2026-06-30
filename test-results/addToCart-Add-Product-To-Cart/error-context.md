# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addToCart.spec.ts >> Add Product To Cart
- Location: tests/addToCart.spec.ts:6:5

# Error details

```
Error: Channel closed
```

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*products/
Received string:  "chrome-error://chromewebdata/"
Timeout: 20000ms

Call log:
  - Expect "toHaveURL" with timeout 20000ms
    38 × unexpected value "chrome-error://chromewebdata/"

```

```yaml
- heading "This page isn’t working" [level=1]
- paragraph:
  - strong: automationexercise.com
  - text: is currently unable to handle this request.
- text: HTTP ERROR 500
- button "Reload"
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class ProductPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async openProducts() {
  7  | 
  8  |     await this.page.getByRole('link', {
  9  |       name: 'Products'
  10 |     }).click();
  11 | 
  12 |     // Verify navigation completed
> 13 |     await expect(this.page).toHaveURL(
     |                             ^ Error: expect(page).toHaveURL(expected) failed
  14 |       /.*products/,
  15 |       { timeout: 20000 }
  16 |     );
  17 | 
  18 |     // Verify search box exists
  19 |     await expect(
  20 |       this.page.locator('#search_product')
  21 |     ).toBeVisible({
  22 |       timeout: 20000
  23 |     });
  24 |   }
  25 | 
  26 |   async searchProduct(product: string) {
  27 | 
  28 |     console.log('Current URL:', this.page.url());
  29 | 
  30 |     const searchInput =
  31 |       this.page.locator('#search_product');
  32 | 
  33 |     await expect(searchInput)
  34 |       .toBeVisible({
  35 |         timeout: 20000
  36 |       });
  37 | 
  38 |     await searchInput.fill(product);
  39 | 
  40 |     await this.page.locator(
  41 |       '#submit_search'
  42 |     ).click();
  43 |   }
  44 | 
  45 |   async addFirstProductToCart() {
  46 | 
  47 |     const firstProduct =
  48 |       this.page.locator(
  49 |         '.product-image-wrapper'
  50 |       ).first();
  51 | 
  52 |     await expect(firstProduct)
  53 |       .toBeVisible({
  54 |         timeout: 20000
  55 |       });
  56 | 
  57 |     await firstProduct.hover();
  58 | 
  59 |     await this.page.locator(
  60 |       '.add-to-cart'
  61 |     ).first().click();
  62 | 
  63 |     await this.page.getByText(
  64 |       'View Cart'
  65 |     ).click();
  66 |   }
  67 | }
```