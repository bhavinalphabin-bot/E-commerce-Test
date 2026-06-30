# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckoutPage.spec.ts >> Complete Checkout Flow
- Location: tests/CheckoutPage.spec.ts:7:5

# Error details

```
Error: Channel closed
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Automation Exercise website" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Automation Exercise website" [ref=e9]
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
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as Bhavy Mangukiya
  - generic [ref=e46]:
    - heading "Order Placed!" [level=2] [ref=e47]
    - paragraph [ref=e48]:
      - text: Congratulations! Your order has been confirmed!
      - link "Business & Industrial" [ref=e49] [cursor=pointer]:
        - img [ref=e51]
        - text: Business & Industrial
    - link "Download Invoice" [ref=e53] [cursor=pointer]:
      - /url: /download_invoice/500
    - link "Continue" [ref=e55] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - generic [ref=e76]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e78]: Discover more
      - link "Development Tools" [ref=e79] [cursor=pointer]:
        - generic "Development Tools" [ref=e80]
        - img [ref=e82]
      - link "Software" [ref=e84] [cursor=pointer]:
        - generic "Software" [ref=e85]
        - img [ref=e87]
      - link "Programming" [ref=e89] [cursor=pointer]:
        - generic "Programming" [ref=e90]
        - img [ref=e92]
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class CheckoutPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async proceedToCheckout() {
> 7  |     await this.page.locator(
     |     ^ Error: Channel closed
  8  |       '.check_out'
  9  |     ).click();
  10 |   }
  11 | 
  12 |   async placeOrder() {
  13 |     await this.page.locator(
  14 |       'a[href="/payment"]'
  15 |     ).click();
  16 |   }
  17 | 
  18 |   async enterPaymentDetails() {
  19 | 
  20 |     await this.page.locator(
  21 |       '[data-qa="name-on-card"]'
  22 |     ).fill('Bhavy');
  23 | 
  24 |     await this.page.locator(
  25 |       '[data-qa="card-number"]'
  26 |     ).fill('799020152503');
  27 | 
  28 |     await this.page.locator(
  29 |       '[data-qa="cvc"]'
  30 |     ).fill('23');
  31 | 
  32 |     await this.page.locator(
  33 |       '[data-qa="expiry-month"]'
  34 |     ).fill('12');
  35 | 
  36 |     await this.page.locator(
  37 |       '[data-qa="expiry-year"]'
  38 |     ).fill('2030');
  39 |   }
  40 | 
  41 |   async submitOrder() {
  42 |     await this.page.locator(
  43 |       '[data-qa="pay-button"]'
  44 |     ).click();
  45 |   }
  46 | }
```