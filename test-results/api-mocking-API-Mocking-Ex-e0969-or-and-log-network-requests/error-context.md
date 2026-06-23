# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api-mocking.spec.ts >> API Mocking Examples >> Monitor and log network requests
- Location: tests/api-mocking.spec.ts:48:7

# Error details

```
Error: Channel closed
```

```
Error: page.waitForLoadState: Test ended.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | /**
  4   |  * API Mocking & Network Interception
  5   |  * Learn: route interception, mocking API responses, network debugging
  6   |  */
  7   | 
  8   | test.describe('API Mocking Examples', () => {
  9   |   
  10  |   test('Mock product search API response', async ({ page }) => {
  11  |     
  12  |     // Intercept API calls and mock responses
  13  |     await page.route('**/api/product**', route => {
  14  |       route.abort('blockedbyclient');
  15  |     });
  16  | 
  17  |     await page.goto('https://automationexercise.com/products');
  18  |     
  19  |     // Products section might show error or fallback UI
  20  |     await expect(page).not.toHaveTitle('Error');
  21  |   });
  22  | 
  23  |   test('Mock successful API with custom data', async ({ page }) => {
  24  |     
  25  |     // Intercept and modify product response
  26  |     await page.route('**/api/products*', async (route) => {
  27  |       const mockData = {
  28  |         products: [
  29  |           {
  30  |             id: 1,
  31  |             name: 'Mocked Product',
  32  |             price: 99.99,
  33  |             image: 'mocked-image.jpg',
  34  |           },
  35  |         ],
  36  |       };
  37  |       
  38  |       await route.fulfill({
  39  |         status: 200,
  40  |         body: JSON.stringify(mockData),
  41  |       });
  42  |     });
  43  | 
  44  |     await page.goto('https://automationexercise.com/products');
  45  |     await page.waitForLoadState('networkidle');
  46  |   });
  47  | 
  48  |   test('Monitor and log network requests', async ({ page }) => {
  49  |     const requests: string[] = [];
  50  | 
  51  |     // Capture all API requests
  52  |     page.on('request', (request) => {
  53  |       if (request.url().includes('api')) {
  54  |         requests.push(request.url());
  55  |         console.log('API Request:', request.url());
  56  |         console.log('Method:', request.method());
  57  |       }
  58  |     });
  59  | 
  60  |     await page.goto('https://automationexercise.com');
> 61  |     await page.waitForLoadState('networkidle');
      |                ^ Error: page.waitForLoadState: Test ended.
  62  | 
  63  |     // Verify API calls were made
  64  |     console.log('Total API requests:', requests.length);
  65  |   });
  66  | 
  67  |   test('Simulate slow network', async ({ page }) => {
  68  |     
  69  |     // Simulate slow API responses
  70  |     await page.route('**/*', async (route) => {
  71  |       // Add 2 second delay
  72  |       await new Promise(resolve => setTimeout(resolve, 2000));
  73  |       await route.continue();
  74  |     });
  75  | 
  76  |     const startTime = Date.now();
  77  |     await page.goto('https://automationexercise.com');
  78  |     const endTime = Date.now();
  79  | 
  80  |     // Should take longer due to artificial delay
  81  |     console.log('Page load time with throttling:', endTime - startTime);
  82  |   });
  83  | 
  84  |   test('Simulate API error responses', async ({ page }) => {
  85  |     
  86  |     // Mock API error (500 Internal Server Error)
  87  |     await page.route('**/api/**', route => {
  88  |       route.fulfill({
  89  |         status: 500,
  90  |         contentType: 'application/json',
  91  |         body: JSON.stringify({
  92  |           error: 'Internal Server Error',
  93  |           message: 'Database connection failed',
  94  |         }),
  95  |       });
  96  |     });
  97  | 
  98  |     await page.goto('https://automationexercise.com/products');
  99  |     
  100 |     // Application should handle error gracefully
  101 |     await page.waitForLoadState('domcontentloaded');
  102 |   });
  103 | });
  104 | 
  105 | test.describe('Network Response Validation', () => {
  106 |   
  107 |   test('Verify response headers', async ({ page }) => {
  108 |     let responseHeaders: Record<string, string> = {};
  109 | 
  110 |     page.on('response', (response) => {
  111 |       if (response.url().includes('automationexercise.com')) {
  112 |         responseHeaders = response.headers();
  113 |       }
  114 |     });
  115 | 
  116 |     await page.goto('https://automationexercise.com');
  117 |     await page.waitForLoadState('networkidle');
  118 | 
  119 |     // Verify security headers
  120 |     console.log('Response Headers:', responseHeaders);
  121 |   });
  122 | 
  123 |   test('Validate JSON response structure', async ({ page }) => {
  124 |     
  125 |     await page.route('**/api/productsList**', async (route) => {
  126 |       const response = await route.fetch();
  127 |       const json = await response.json();
  128 | 
  129 |       // Validate response structure
  130 |       if (json && Array.isArray(json.products)) {
  131 |         for (const product of json.products) {
  132 |           expect(product).toHaveProperty('id');
  133 |           expect(product).toHaveProperty('name');
  134 |           expect(product).toHaveProperty('price');
  135 |         }
  136 |       }
  137 | 
  138 |       await route.fulfill({ response });
  139 |     });
  140 | 
  141 |     await page.goto('https://automationexercise.com/products');
  142 |   });
  143 | });
  144 | 
```