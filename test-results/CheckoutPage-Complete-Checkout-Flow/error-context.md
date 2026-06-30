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

```
Error: locator.click: Target page, context or browser has been closed
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
  - generic [ref=e44]:
    - img "Website for practice" [ref=e45]
    - textbox "Search Product" [ref=e46]: Blue Top
    - button "" [ref=e47] [cursor=pointer]:
      - generic [ref=e48]: 
  - generic [ref=e51]:
    - generic [ref=e53]:
      - heading "Category" [level=2] [ref=e54]
      - generic [ref=e55]:
        - heading " Women" [level=4] [ref=e58]:
          - link " Women" [ref=e59] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e61]: 
            - text: Women
        - heading " Men" [level=4] [ref=e64]:
          - link " Men" [ref=e65] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e67]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e70]:
          - link " Kids" [ref=e71] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e73]: 
            - text: Kids
      - insertion [ref=e75]:
        - generic [ref=e78]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e80]: Discover more
          - link "Men's T-shirts" [ref=e81] [cursor=pointer]:
            - generic "Men's T-shirts" [ref=e82]
            - img [ref=e84]
          - link "V-Neck T-Shirts" [ref=e86] [cursor=pointer]:
            - generic "V-Neck T-Shirts" [ref=e87]
            - img [ref=e89]
          - link "Online clothing store" [ref=e91] [cursor=pointer]:
            - generic "Online clothing store" [ref=e92]
            - img [ref=e94]
          - link "Fashion accessories" [ref=e96] [cursor=pointer]:
            - generic "Fashion accessories" [ref=e97]
            - img [ref=e99]
          - link "E-commerce platform" [ref=e101] [cursor=pointer]:
            - generic "E-commerce platform" [ref=e102]
            - img [ref=e104]
          - link "Women's dresses" [ref=e106] [cursor=pointer]:
            - generic "Women's dresses" [ref=e107]
            - img [ref=e109]
          - link "Apparel" [ref=e111] [cursor=pointer]:
            - generic "Apparel" [ref=e112]
            - img [ref=e114]
          - link "Kids' shirts" [ref=e116] [cursor=pointer]:
            - generic "Kids' shirts" [ref=e117]
            - img [ref=e119]
      - generic [ref=e121]:
        - heading "Brands" [level=2] [ref=e122]
        - list [ref=e124]:
          - listitem [ref=e125]:
            - link "(6) Polo" [ref=e126] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e127]: (6)
              - text: Polo
          - listitem [ref=e128]:
            - link "(5) H&M" [ref=e129] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e130]: (5)
              - text: H&M
          - listitem [ref=e131]:
            - link "(5) Madame" [ref=e132] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e133]: (5)
              - text: Madame
          - listitem [ref=e134]:
            - link "(3) Mast & Harbour" [ref=e135] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e136]: (3)
              - text: Mast & Harbour
          - listitem [ref=e137]:
            - link "(4) Babyhug" [ref=e138] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e139]: (4)
              - text: Babyhug
          - listitem [ref=e140]:
            - link "(3) Allen Solly Junior" [ref=e141] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e142]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e143]:
            - link "(3) Kookie Kids" [ref=e144] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e145]: (3)
              - text: Kookie Kids
          - listitem [ref=e146]:
            - link "(5) Biba" [ref=e147] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e148]: (5)
              - text: Biba
    - generic [ref=e150]:
      - heading "Searched Products" [level=2] [ref=e151]
      - generic [ref=e154]:
        - generic [ref=e155]:
          - generic [ref=e157]: 
          - heading "Added!" [level=4] [ref=e158]
        - generic [ref=e159]:
          - paragraph [ref=e160]: Your product has been added to cart.
          - paragraph [ref=e161]:
            - link "View Cart" [ref=e162] [cursor=pointer]:
              - /url: /view_cart
        - button "Continue Shopping" [ref=e164] [cursor=pointer]
      - generic [ref=e166]:
        - generic [ref=e167]:
          - generic [ref=e168]:
            - img "ecommerce website products" [ref=e169]
            - heading "Rs. 500" [level=2] [ref=e170]
            - paragraph [ref=e171]: Blue Top
            - generic [ref=e172] [cursor=pointer]:
              - generic [ref=e173]: 
              - text: Add to cart
          - generic [ref=e175]:
            - heading "Rs. 500" [level=2] [ref=e176]
            - paragraph [ref=e177]: Blue Top
            - generic [ref=e178] [cursor=pointer]:
              - generic [ref=e179]: 
              - text: Add to cart
        - list [ref=e181]:
          - listitem [ref=e182]:
            - link " View Product" [ref=e183] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=e184]: 
              - text: View Product
  - contentinfo [ref=e185]:
    - generic [ref=e190]:
      - heading "Subscription" [level=2] [ref=e191]
      - generic [ref=e192]:
        - textbox "Your email address" [ref=e193]
        - button "" [ref=e194] [cursor=pointer]:
          - generic [ref=e195]: 
        - paragraph [ref=e196]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e200]: Copyright © 2021 All rights reserved
  - link "" [ref=e201] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e202]: 
  - insertion [ref=e204]:
    - generic [ref=e207]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e209]: Discover more
      - link "Seasonal clothing collections" [ref=e210] [cursor=pointer]:
        - generic "Seasonal clothing collections" [ref=e211]
        - img [ref=e213]
      - link "Jeans" [ref=e215] [cursor=pointer]:
        - generic "Jeans" [ref=e216]
        - img [ref=e218]
      - link "Men's shirts" [ref=e220] [cursor=pointer]:
        - generic "Men's shirts" [ref=e221]
        - img [ref=e223]
  - insertion [ref=e225]:
    - iframe [ref=e228]:
      - iframe [ref=f53e1]:
        - generic [active]:
          - generic [ref=f54e1]:
            - generic [ref=f54e2]:
              - generic:
                - img [ref=f54e6] [cursor=pointer]
                - button [ref=f54e8] [cursor=pointer]:
                  - img [ref=f54e9]
            - insertion [ref=f54e16]:
              - generic [ref=f54e17]:
                - link "Click Here" [ref=f54e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CLOF_3LNDaqiaKcufssUP1tqlqQrqx6C1hwHup-LY2hSHsL3ko0YQASD9tJ6VAWDlgoCAqA6gAYviiqAByAEJqAMByAObBKoEhgJP0PIczn_GSoWIt-lRHzrKmBLddMVHIhOHqlMu7qC47-VR4IjltcdwVBstGR0hCjlHY8II2I_y-J4BNmsPqmfdYA6dJNT7tXgrKPqK1iZC_1zV11raC5ZPWey294f8qgK5IdSCgWj6-QzAN8_R78iVYYBvZ1OONqk9uLqMt6J-x-PABctcZTz3kpFAgQP4MIaQl2U4mPb21Cpx14WvGYa88s4Jr_qgnTza5LscK2qgiSQJQAcexyINi476u9p6wEYtg4g6eVuY_ZNOn-PpxHyFAfE2VcMx9zCUFK_gSRFwJ52vzranyoO0qVD1lWoUPL0E-Hmv4Q8Usc5kxLA3sdctNkRlzfyAwASc1r-0mAXgBAOIBdzVn9pTkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY_9Dn-fiulQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCKmB6Pn4rpUDFcuPrAIdVm0ppfANAYgOCbATrYfMItATANgTDdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYBRhNIgEA0BkB2BkB&ae=1&num=1&cid=CAQSjAIAEQoqgcaj0RQu6wSl663RwSMwPi5dC4SF398Z9TuXaPPIUbZ5_ACtOcCnmk_2nmS8wygbL1-hQPTACFI9zp8nk9AZ52ekuW1Mev4-8KKoDEkhV6ur_wL0sBCgIC_DN02suThnZoyFrzMLcQQ_5EAi39ntl8RcScQsuc3xMX_HAPnJXzkkNlzbfvX7G51i4i_RKjW9jA76MEk-Nlyh5W7txGf5L_SxyPpTen4Omba3YVVkS0NkoBkAPfY3-5ihWE-qy0q157db4wfRgcqx21Z7gcGwIj1MTpLvNXTvc8bK90V5uQ-0XhoZtT2zMFmkPPRoawg9tTkFTRGuDHCmxEg-3NkUJVRZjXEvLRmZGAE&sig=AOD64_1WhU8GKqHNOoi9bfOV3tQ8YlkUDQ&client=ca-pub-1677597403311019&dbm_c=AKAmf-CU3PvMG0S6tII6URLDkKHnvrkP7LKi9YyR-uGP7veM2YxkiuSeFb2XiprrKHipVUqLjtWFp89xJ_FN50PC8AEA8Z_6ggNwGFEvtnn2p1zius2wvSq5vVatvpdyQfhk-zujAS65vM1jVbjEb1niBGbi_gU3_zg_GMJkWla5_GV1wuCWhE4geANudDrI8xjhuD_dfWfizwjp0ZxfaVt2UnU4lxSe1R4taJ9vTdZYOvRJ99s8dUeWC0JREbNpHr5ccFSXhjL40f5Zc2AfGfIeN3G5Uv6f-g&cry=1&dbm_d=AKAmf-AoRMEBhYnCet3VVgronNp8m1bI4VKB1X0hcMmCdNePy-rVX39x7oNOB8ZL8DJmnsF227A_OKIYssiNdzPJU775DYGnbQ1crcJehkYIAO-xobZUMi6SQB8muf2xL2DoOPLxQ1p9_Gq5BkaMNNXRXITDq4YoSZjsPAB7JsbyY8p9dk9hp0rR40gBhUHqwVJsFSHUXCNT1L0pEfoB7FQQKAJ8YmXyxPhWP9WaTGbhnG4-nNlAGLJ_hhDjFqmtAsyxSWzavU13vuKjYY00FYbUwv7xuHgCjPed0lrUyT86qJDQ2Mf0hYseb-Gtzlf-UkTHRKDc1oPaT0IirLpGfEhQqMsf5PyqzYlmpJygh1UrMj60fD6ffemirBPFiIoACwwdyKGCrZL9FBFfU1masbCsWjeE5x6ZVaAFgzZXmCQOxgR5goxEtSqBQh3BHZwwwuCI9U1i97EGFhwK8RQXk1thkndja7iga3NvWsVppktwTCcBVtMkwx-KaV6CUU1CYH4v7-kXxTiceBOrfWmTMv7zMG-2EkuImr0xT5g3H0byNNR-c43rsGlKoms-R2x8hWYJepTqqgLeFImRX97IqUL4AN66yqgLk1c89Wm234hK_VHMp44ovwfFpDyMTf3ESjHTBedZPAihgtyOYeVSkQRjPcjOrLtwHIetIAwqV2-E1W24C1tzVVjLXXzOWm9RQ0XlNtJcRlY5bnxwwWBzcxPZ6b1yt5calEWNFF2-omtJ9kkQPmfZWxc&adurl=https://servedby.flashtalking.com/click/7/281072;9880718;5573351;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0jxc2BQOkljCASO0yfEOPBP&ft_impID=3CAA5C40-2506-2550-415B-59BA6757F1D5&ft_section=22469405404&g=6755BC93A953E6&random=869194.1462195878&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=QBWYP9D2&mv=display&mv2=display
                  - img "Click Here" [ref=f54e19]
                - link "AdChoices arrow" [ref=f54e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f54e22]
                - link "Privacy Notification" [ref=f54e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f54e25]
                - link "Privacy Notification" [ref=f54e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f54e28]
          - iframe
  - generic [ref=e229]:
    - generic [ref=e230] [cursor=pointer]:
      - img [ref=e232]
      - link "Go to shopping options for Development Tools" [ref=e234]: Development Tools
    - button "Close shopping anchor" [ref=e235]
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class CheckoutPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async proceedToCheckout() {
  7  |     await this.page.locator(
  8  |       '.check_out'
  9  |     ).click();
  10 |   }
  11 | 
  12 |   async placeOrder() {
  13 |     await this.page.locator(
  14 |       'a[href="/payment"]'
> 15 |     ).click();
     |       ^ Error: locator.click: Target page, context or browser has been closed
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