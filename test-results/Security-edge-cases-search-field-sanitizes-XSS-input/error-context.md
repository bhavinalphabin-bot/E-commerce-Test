# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Security/edge-cases.spec.ts >> search field sanitizes XSS input
- Location: tests/Security/edge-cases.spec.ts:4:5

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
    - img "Website for practice" [ref=e39]
    - textbox "Search Product" [ref=e40]: <script>alert("xss")</script>
    - button "" [ref=e41] [cursor=pointer]:
      - generic [ref=e42]: 
  - generic [ref=e45]:
    - generic [ref=e47]:
      - heading "Category" [level=2] [ref=e48]
      - generic [ref=e49]:
        - heading " Women" [level=4] [ref=e52]:
          - link " Women" [ref=e53] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e55]: 
            - text: Women
        - heading " Men" [level=4] [ref=e58]:
          - link " Men" [ref=e59] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e61]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e64]:
          - link " Kids" [ref=e65] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e67]: 
            - text: Kids
      - generic:
        - insertion:
          - generic:
            - iframe
      - generic [ref=e68]:
        - heading "Brands" [level=2] [ref=e69]
        - list [ref=e71]:
          - listitem [ref=e72]:
            - link "(6) Polo" [ref=e73] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e74]: (6)
              - text: Polo
          - listitem [ref=e75]:
            - link "(5) H&M" [ref=e76] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e77]: (5)
              - text: H&M
          - listitem [ref=e78]:
            - link "(5) Madame" [ref=e79] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e80]: (5)
              - text: Madame
          - listitem [ref=e81]:
            - link "(3) Mast & Harbour" [ref=e82] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e83]: (3)
              - text: Mast & Harbour
          - listitem [ref=e84]:
            - link "(4) Babyhug" [ref=e85] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e86]: (4)
              - text: Babyhug
          - listitem [ref=e87]:
            - link "(3) Allen Solly Junior" [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e89]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e90]:
            - link "(3) Kookie Kids" [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e92]: (3)
              - text: Kookie Kids
          - listitem [ref=e93]:
            - link "(5) Biba" [ref=e94] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e95]: (5)
              - text: Biba
    - heading "Searched Products" [level=2] [ref=e98]
  - contentinfo [ref=e99]:
    - generic [ref=e104]:
      - heading "Subscription" [level=2] [ref=e105]
      - generic [ref=e106]:
        - textbox "Your email address" [ref=e107]
        - button "" [ref=e108] [cursor=pointer]:
          - generic [ref=e109]: 
        - paragraph [ref=e110]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e114]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e115]:
    - iframe [ref=e118]:
      - iframe [ref=f30e1]:
        - generic [ref=f34e2]:
          - link "Advertisement" [ref=f34e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjssUpH44jjORslWyyntuz3xHAMHSXdjThHogJe6E7FrOQPgs7jMc7RYJw2ssSqYGtHtNvGUn-_CyBeDSdQcvoDGttTlBJGTBogtgwT1uIepQTTl737Vlf6sFD4D6C_JTUjtqGu7WAkguGlosWAAqbOP0tAfRcOy_hiYiGnRV1fyXRTYsqcftheBjlCrrCb904DGrD37mnOMz2MbEYQnW19evOWybNtWsucla22Awv-lItEXx3PWYzeSUx18Wtmn3DyM9b7sDupPbeo9IgfDoRhpOeb45TuSTV5oxMrFdrgu9uGMedTbc-uh8-mtNNQLM3rLMfpd2GZGLHiUQcAQ36Jp4lnDkbpkQIPjGNuvCIurDCGQsXwdaPcemOMcU70URBZF9WMA1SWAZ5w_wfrOftzBZRL4rDhAAhRro172K51vNJo2a0OgZK3OgcV1OjBWeuIpDMZK5DnTl9DuqD2NvB3SwPQ2H5mM-kQ4nV4kUrm-dksH2vMIhpGW07v2CcHUKMqNdMfbqpwIqVkXsb2wzpcZqB85It7vYZTdKPUMvpfrxpGsN4ctKGu40TuyIbqjCEytezzS48UDhLYvrUprLCC1toxhH1aEefj1yi7oH9DPhyLPA_gSoJXoxcXuYu4ara1kkPyBNnwzKUvYP9H67Y3BW0FG7slJdED41sEBe1qZ3-ui-HhDao8D2Fayc3LlSrHE2jmGZX1koMFASDThWdwcjXRuJNtsL18Wead40uCtRnaKakroJL-Jm-i2bpU4z7W7VIYSx8Hfa_RmSFTs45WM6Z9ANFQImd6Odt99TSTms4ng-iSdNi12U4Iisj8y6JGxbxX788fjgwcLv5BxJb1q76JoRBqs50WxACu-aZbERubpAhVy9V2QbsALI04kgQfr6aydeF5RByI2dzasfN2mAvaZT_UelL9_4f510FY7QEGGwl_vSy1zpmwnaMVxvl_aEjl0I_Klsc9Unl_e_8jvyxMKxvda4PjWRibbWlS23ZhOjNT1UEGtPSPiadN7RPBuzP954lX_Iaixvos6qo4XaDkBQQ7IQNtaIIpPq2deddpq737kJPF9JR8nKuLSkL9kS_qD_j0wd_5Y_8nkvfx6qdJiqIL7Vd-BcyvvsET-o0ICCIIkj6G0iJDxF4bNCR8IMwhjhWwDyKbFvvHW-kWuy2q-oI1Vwg7Sr4hKA1Efkkmbuw8rXjDQCjlc7dz3kh6QasXL9rKKA-2GlnISSFuug-i8Z7s3qWOPlVPYdvEfFtxhOR-LjDId-pdsL2vMSyFH8zBqnc5DnmcbCpVUsc7UOaCyP9gpT2SscPgbcjCihISdmD8euw-ps0axWxK2Z67NB4RRoSqe_j1HwZdIRzJPlD58oRwDVwz0ZjtasKoz4l85UBbpIaTXZ6vvir5l_rSIvTNwcgvqiBrj2yJbRZlbFTAEKztIcAsBy9Aa1JCWvvfGJaltxHewg98KBee5omEPjoxeV29Shap51wpah0E-ei-kfAJ_GF0xNJi6jcP5d4xwfrNjLIkkjGYQaMvWcG0l3A8gQQAIjSQGnLjLDKD-Zd7vUqYAmjO-IXfXdy76uPVqEv6NTh7QmRZXd56iXH6q4cqKw-WOXxmxIRI7n51l5f4Brry5R2s3xIiNZxS4WqirDqMdMQS755DwRB5fsZm4JqJOGNXNv3E3NzBvPGbkIRcvfPxaCX5tv3GtrceJUGFU-6m6OeLkkJ8OIgnaBaTdXjNv1si0Qzu6wJ2izUHrbPhLz7K9m-AY0pOBuqv0zNwg20_vUSAPmyYz5eLo&sai=AMfl-YQyD3yMPsbn6MqCYetwfS8xKNDzFNFNyIPGfmTInedacc6Jd0DfWYQUV0MAZvXn-wrgWZzbeUz-SYoPRCHPR6pLOJkDKQujXTxfVMn5laIuZbJyMplfq8Hgqwgb_5o125rmvR8t_ut968r45a8Air280-pJvVkktfHN5MCyJtwAWLzK2qLvM7OWXlMnOJHk0CG2mX0dsX9P0rEu-r74XVyaCEEynEhp53QQbwS2oA2-VE9PZZdDiKVPSmWy9Wn7jtrs42-S_HDVJrMHkM9rdUgo88x_tACoxTBUyal9_w73N9Jl_M_tTZfO3vo_PwcqvgswUOlYyf7Rm-MfhsAYlx98WDiqBDKS-UQlSGKWmtx_jIUfWcvVMJZfxf0HUMaNYnmTYRUUWv51zxWY1ZrwjuAxCFbGqi4rpe-dySEEGn8aSj0lzdLodzBTlm6uam7UtpXTYy49Bs4sQGY1zpbx-_NxZ1Y-dMqpu6GzweNmfv1oiyeewjRL5OkejC4IwEQOYXHs7ujZdfQvzhD6H3IUABzr5PnpqFQFwGdtC9muxNS-7KgNjIg1IXaBzN62RmtO0Jh3IO9uD0ahfuuheO6ScKMkIJGnfaSBBN6FvRlqOJ70e8UlzVO8nTn6s0H9gsvlVpBBett22EB0K44suWjJ4Mn2SHmMn8PY9Jx6jYzSzgA0AXou4BxrNHKmVUqO5g6uQ2qMI6qrbaoi31x1RnywRqXRxr7KN5JqTtKo6NouCgYYhQBs5c1OJYCyAcEx-nK7sRG5CkIBzjMRy_M09JaOpwW7Mu_k9i62VrJIlcdYlFXJESy1OuXmkwgujWSo_aG7nkD-GSXU0eo2DN7nsuy12uQYJX0qnPXw1l18XrCDqgLTqXIvEj_3Tk73N_mC2mG1qqExoVSM9GiE4CuM2khl88Hyn3VxjCzm7Cub-220z4sQnp7j&sig=Cg0ArKJSzL48NEJ40gxJ&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly90aS5jb20&urlfix=1&adurl=https://careers.ti.com/en/sites/CX/jobs%3Flocation%3DIndia%26locationId%3D300000000361484%26locationLevel%3Dcountry%26mode%3Dlocation%26HQS%3Dcorp-emp-rec-workplacein_null-dspbspros-car-gdv360_728x90-in_en_awr%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23756364381
            - img "Advertisement" [ref=f34e5]
          - generic [ref=f34e6]:
            - generic:
              - img [ref=f34e10] [cursor=pointer]
              - button [ref=f34e12] [cursor=pointer]:
                - img [ref=f34e13]
```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | 
  3  | // XSS payload in search
  4  | test('search field sanitizes XSS input', async ({ page }) => {
  5  |   await page.goto('https://automationexercise.com/products');
  6  |   await page.fill('#search_product', '<script>alert("xss")</script>');
> 7  |   await page.click('#submit_search');
     |   ^ Error: Channel closed
  8  |   // Assert no alert dialog fires and the script tag is escaped in DOM
  9  |   const content = await page.locator('.productinfo').allTextContents();
  10 |   content.forEach(t => expect(t).not.toContain('<script>'));
  11 | });
  12 | 
  13 | // Auth state: saved login should not persist after explicit logout
  14 | test('session clears after logout', async ({ page, context }) => {
  15 |   // Login, save storageState, logout, reload — assert redirected to login
  16 | });
```