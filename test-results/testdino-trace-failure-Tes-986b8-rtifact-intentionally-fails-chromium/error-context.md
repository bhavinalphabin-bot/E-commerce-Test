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
    - waiting for" https://stg-frontend.testdino.com/auth/login?redirectTo=%2F&reason=session_invalid" navigation to finish...
    - navigated to "https://stg-frontend.testdino.com/auth/login?redirectTo=%2F&reason=session_invalid"

```

```yaml
- main:
  - img "Testdino Logo"
  - heading "Sign in to TestDino" [level=1]
  - button "Continue with Google":
    - img
    - text: Continue with Google
  - link "Continue with SSO":
    - /url: /auth/sso?redirectTo=%2F&reason=session_invalid
  - text: or
  - textbox "name@work-email.com"
  - textbox "Password"
  - button
  - button "Sign in"
  - checkbox "Remember me"
  - text: Remember me
  - link "Forgot password?":
    - /url: /auth/forgot-password
  - paragraph:
    - text: Don't have an account?
    - link "Create an account":
      - /url: /auth/signup?redirectTo=%2F&reason=session_invalid
  - link "Privacy & Terms":
    - /url: https://testdino.com/privacy-policy/?utm_source=app
  - link "Contact Us":
    - /url: https://testdino.com/contact-us/?utm_source=app
- alert
```

# Test source

```ts
  1 | import { test, expect } from '@testdino/playwright';
  2 | 
  3 | test('TestDino trace artifact intentionally fails', async ({ page }) => {
  4 |   await page.goto('/');
  5 | 
> 6 |   await expect(page.getByRole('heading', { name: 'Intentional TestDino Trace Failure' })).toBeVisible();
    |                                                                                           ^ Error: expect(locator).toBeVisible() failed
  7 | });
  8 | 
```