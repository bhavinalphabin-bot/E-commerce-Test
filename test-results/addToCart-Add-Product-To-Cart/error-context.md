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

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e38]:
    - list [ref=e40]:
      - listitem [ref=e41]:
        - link "Home" [ref=e42] [cursor=pointer]:
          - /url: /
      - listitem [ref=e43]: Shopping Cart
    - generic [ref=e48] [cursor=pointer]: Proceed To Checkout
    - table [ref=e50]:
      - rowgroup [ref=e51]:
        - row "Item Description Price Quantity Total" [ref=e52]:
          - cell "Item" [ref=e53]
          - cell "Description" [ref=e54]
          - cell "Price" [ref=e55]
          - cell "Quantity" [ref=e56]
          - cell "Total" [ref=e57]
          - cell [ref=e58]
      - rowgroup [ref=e59]:
        - row "Product Image Men Tshirt Men > Tshirts Rs. 400 1 Rs. 400 " [ref=e60]:
          - cell "Product Image" [ref=e61]:
            - link "Product Image" [ref=e62] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e63]
          - cell "Men Tshirt Men > Tshirts" [ref=e64]:
            - heading "Men Tshirt" [level=4] [ref=e65]:
              - link "Men Tshirt" [ref=e66] [cursor=pointer]:
                - /url: /product_details/2
            - paragraph [ref=e67]: Men > Tshirts
          - cell "Rs. 400" [ref=e68]:
            - paragraph [ref=e69]: Rs. 400
          - cell "1" [ref=e70]:
            - button "1" [ref=e71] [cursor=pointer]
          - cell "Rs. 400" [ref=e72]:
            - paragraph [ref=e73]: Rs. 400
          - cell "" [ref=e74]:
            - generic [ref=e76] [cursor=pointer]: 
  - contentinfo [ref=e77]:
    - generic [ref=e82]:
      - heading "Subscription" [level=2] [ref=e83]
      - generic [ref=e84]:
        - textbox "Your email address" [ref=e85]
        - button "" [ref=e86] [cursor=pointer]:
          - generic [ref=e87]: 
        - paragraph [ref=e88]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e92]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e94]:
    - generic [ref=e97]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e99]: Discover more
      - link "Product subscription service" [ref=e100] [cursor=pointer]:
        - generic "Product subscription service" [ref=e101]
        - img [ref=e103]
      - link "Checkout automation tools" [ref=e105] [cursor=pointer]:
        - generic "Checkout automation tools" [ref=e106]
        - img [ref=e108]
      - link "API testing services" [ref=e110] [cursor=pointer]:
        - generic "API testing services" [ref=e111]
        - img [ref=e113]
  - insertion [ref=e115]:
    - iframe [ref=e118]:
      - iframe [ref=f108e1]:
        - generic [active]:
          - generic [ref=f109e1]:
            - generic [ref=f109e2]:
              - generic:
                - img [ref=f109e6] [cursor=pointer]
                - button [ref=f109e8] [cursor=pointer]:
                  - img [ref=f109e9]
            - insertion [ref=f109e16]:
              - generic [ref=f109e17]:
                - iframe [ref=f109e18]:
                  - generic [active] [ref=f114e1]:
                    - link:
                      - /url: javascript:void(0);
                      - generic [ref=f114e3] [cursor=pointer]:
                        - img [ref=f114e7]
                        - img [ref=f114e9]
                        - img [ref=f114e11]
                        - img [ref=f114e13]
                        - img [ref=f114e15]
                        - img [ref=f114e17]
                        - img [ref=f114e19]
                        - img [ref=f114e21]
                        - img [ref=f114e23]
                        - generic [ref=f114e24]:
                          - img [ref=f114e25]
                          - img [ref=f114e27]
                        - img [ref=f114e29]
                        - img [ref=f114e31]
                        - img [ref=f114e33]
                        - img [ref=f114e35]
                        - img [ref=f114e37]
                - link "AdChoices arrow" [ref=f109e20] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f109e21]
                - link "Privacy Notification" [ref=f109e23] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f109e24]
                - link "Privacy Notification" [ref=f109e26] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f109e27]
          - iframe
          - iframe [ref=f109e28]:
            
          - iframe [ref=f109e29]:
            
          - iframe [ref=f109e30]:
            
          - iframe [ref=f109e31]:
            
          - iframe [ref=f109e32]:
            
  - generic [ref=e119]:
    - generic [ref=e120] [cursor=pointer]:
      - img [ref=e122]
      - link "Go to shopping options for Test case management" [ref=e124]: Test case management
    - button "Close shopping anchor" [ref=e125]
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
  13 |     await expect(this.page).toHaveURL(
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
> 59 |     await this.page.locator(
     |     ^ Error: Channel closed
  60 |       '.add-to-cart'
  61 |     ).first().click();
  62 | 
  63 |     await this.page.getByText(
  64 |       'View Cart'
  65 |     ).click();
  66 |   }
  67 | }
```