# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testdino-trace-failure.spec.ts >> TestDino trace artifact intentionally fails
- Location: tests/testdino-trace-failure.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Intentional TestDino Trace Failure' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('heading', { name: 'Intentional TestDino Trace Failure' })

```

```yaml
- img "logo"
- list:
  - listitem: Home
  - listitem: About Us
  - listitem: Contact Us
  - listitem: All Products
- img
- img
- img "shopping-cart"
- heading "Your Cart" [level=2]
- button "Close cart":
  - img "close"
- img
- img "Background"
- heading "Demo E-commerce Testing Store" [level=1]
- paragraph: Embark on an electronic journey. Dive into our shop now!
- link "Shop Now":
  - /url: /products
  - button "Shop Now"
- link "camera Audio & Camera Professional cameras, microphones, and audio equipment for creators and enthusiasts Explore More arrow-right":
  - /url: /products
  - img "camera"
  - heading "Audio & Camera" [level=1]
  - paragraph: Professional cameras, microphones, and audio equipment for creators and enthusiasts
  - text: Explore More
  - img "arrow-right"
- link "Appliances Smart home appliances and kitchen gadgets to simplify your daily life Explore More arrow-right":
  - /url: /products
  - heading "Appliances" [level=1]
  - paragraph: Smart home appliances and kitchen gadgets to simplify your daily life
  - text: Explore More
  - img "arrow-right"
- link "Gadgets Gadgets Latest tech gadgets, wearables, and innovative devices for modern living Explore More arrow-right":
  - /url: /products
  - img "Gadgets"
  - heading "Gadgets" [level=1]
  - paragraph: Latest tech gadgets, wearables, and innovative devices for modern living
  - text: Explore More
  - img "arrow-right"
- link "PC & Laptops High-performance laptops and PCs for gaming, work, and creative projects Explore More arrow-right":
  - /url: /products
  - heading "PC & Laptops" [level=1]
  - paragraph: High-performance laptops and PCs for gaming, work, and creative projects
  - text: Explore More
  - img "arrow-right"
- heading "Feature Product" [level=1]
- img "left"
- button "heart":
  - img "heart"
- button "shopping":
  - img "shopping"
- link "dp Rode NT1-A Condenser Mic star star star star star (350) $240":
  - /url: /product/rode-nt1-a-condenser-mic
  - img "dp"
  - heading "Rode NT1-A Condenser Mic" [level=1]
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - paragraph: (350)
  - paragraph: $240
- button "heart":
  - img "heart"
- button "shopping":
  - img "shopping"
- link "dp JBL Charge 4 Bluetooth Speaker star star star star star (500) $145":
  - /url: /product/jbl-charge-4-bluetooth-speaker
  - img "dp"
  - heading "JBL Charge 4 Bluetooth Speaker" [level=1]
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - paragraph: (500)
  - paragraph: $145
- button "heart":
  - img "heart"
- button "shopping":
  - img "shopping"
- link "dp Seagate 4TB External Hard Drive star star star star star (800) $85":
  - /url: /product/seagate-4tb-external-hard-drive
  - img "dp"
  - heading "Seagate 4TB External Hard Drive" [level=1]
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - paragraph: (800)
  - paragraph: $85
- button "heart":
  - img "heart"
- button "shopping":
  - img "shopping"
- link "dp SanDisk Ultra Dual Drive 32GB USB 3.0 star star star star star (450) $15":
  - /url: /product/sandisk-ultra-dual-drive-32gb-usb
  - img "dp"
  - heading "SanDisk Ultra Dual Drive 32GB USB 3.0" [level=1]
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - paragraph: (450)
  - paragraph: $15
- img "right"
- heading "Enjoy an Exclusive 20% Off on Laptops" [level=1]
- link "Shop Now":
  - /url: /products
  - button "Shop Now"
- heading "Watch the Price Drop by a Whopping 20%!" [level=1]
- link "Shop Now":
  - /url: /products
  - button "Shop Now"
- heading "New Arrivals" [level=1]
- img "left"
- button "heart":
  - img "heart"
- button "shopping":
  - img "shopping"
- link "dp Rode NT1-A Condenser Mic star star star star star (350) $240":
  - /url: /product/rode-nt1-a-condenser-mic
  - img "dp"
  - heading "Rode NT1-A Condenser Mic" [level=1]
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - paragraph: (350)
  - paragraph: $240
- button "heart":
  - img "heart"
- button "shopping":
  - img "shopping"
- link "dp JBL Charge 4 Bluetooth Speaker star star star star star (500) $145":
  - /url: /product/jbl-charge-4-bluetooth-speaker
  - img "dp"
  - heading "JBL Charge 4 Bluetooth Speaker" [level=1]
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - paragraph: (500)
  - paragraph: $145
- button "heart":
  - img "heart"
- button "shopping":
  - img "shopping"
- link "dp Seagate 4TB External Hard Drive star star star star star (800) $85":
  - /url: /product/seagate-4tb-external-hard-drive
  - img "dp"
  - heading "Seagate 4TB External Hard Drive" [level=1]
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - paragraph: (800)
  - paragraph: $85
- button "heart":
  - img "heart"
- button "shopping":
  - img "shopping"
- link "dp SanDisk Ultra Dual Drive 32GB USB 3.0 star star star star star (450) $15":
  - /url: /product/sandisk-ultra-dual-drive-32gb-usb
  - img "dp"
  - heading "SanDisk Ultra Dual Drive 32GB USB 3.0" [level=1]
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - img "star"
  - paragraph: (450)
  - paragraph: $15
- img "right"
- heading "Category Product" [level=1]
- img "left"
- img "dp"
- text: Smartphones
- img "dp"
- text: Laptops
- img "dp"
- text: Speakers
- img "dp"
- text: Home Appliances
- img "right"
- heading "Subscribe to receive the latest updates on our products!" [level=1]
- textbox "Your Email"
- button "Subscribe"
- heading "Frequently Asked Questions" [level=2]
- group: What is TestDino Demo Store?
- group: Can I actually purchase products from this demo store?
- group: What features does this demo e-commerce site include?
- group: Is this demo store mobile-friendly?
- group: What technologies power this demo e-commerce website?
- group: How can I use this demo for testing?
- group: Does the demo store have real product data?
- group: Is my data secure on this demo website?
- link "Footer Logo":
  - /url: /
  - img "Footer Logo"
- heading "USEFUL LINKS" [level=3]
- list:
  - listitem: Home
  - listitem: About Us
  - listitem: Contact Us
  - listitem: All Products
- heading "COSTUMER POLICY" [level=3]
- list:
  - listitem: Shipping Policy
  - listitem: Return Policy
  - listitem: Cancellation
  - listitem: FAQ
- heading "FOLLOW US" [level=3]
- img
- img
- img
- text: © 2026 TestDino Privacy Policy Terms of Service
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('TestDino trace artifact intentionally fails', async ({ page }) => {
  4 |   await page.goto('/');
  5 | 
> 6 |   await expect(page.getByRole('heading', { name: 'Intentional TestDino Trace Failure' })).toBeVisible();
    |                                                                                           ^ Error: expect(locator).toBeVisible() failed
  7 | });
  8 | 
```