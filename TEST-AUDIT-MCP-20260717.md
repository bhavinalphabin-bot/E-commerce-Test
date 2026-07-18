# Playwright Test Quality Audit — STDIO MCP Validation

Scope: full suite  
Branch: `testingPR`

## Summary

The suite covers shopping, checkout, login, API, network mocking, accessibility, performance, security, visual regression, and TestDino reporter behavior. The configuration captures useful failure artifacts. However, several committed tests are placeholders or deliberately fail, credentials and payment-like values are embedded in source, and many tests do not assert the behavior named in their titles.

Score: **55/100**

## Findings

### High — Credentials are hard-coded in committed tests

`tests/login.spec.ts` and `tests/CheckoutPage.spec.ts` contain a real-looking email and password. `Pages/CheckoutPage.ts` also embeds payment-like data. This exposes sensitive values and makes the suite difficult to run safely across environments.

Recommendation: load test-only credentials from protected environment variables, use seeded disposable accounts, mask secrets in logs, and keep payment fixtures obviously synthetic.

### High — Intentional failures are part of the ordinary test directory

`tests/testdino-filter-verification.spec.ts` and `tests/testdino-trace-failure.spec.ts` intentionally fail or wait. Because the normal configuration scans all of `tests`, these diagnostics can make routine CI red and obscure genuine regressions.

Recommendation: move reporter self-tests to a separate project/directory and exclude them from the default CI project.

### Medium — Multiple tests have little or no behavioral assertion

Examples include `tests/API/product.spec.ts`, several cases in `tests/api-mocking.spec.ts`, the payment-failure placeholder in `tests/API/ProductAPI.spec.ts`, and the logout placeholder in `tests/Security/edge-cases.spec.ts`. Logging or merely reaching the end of a test does not validate the stated outcome.

Recommendation: assert response schema/status, rendered fallback/error states, request behavior, logout redirect/storage clearing, and payment error messaging.

### Medium — Retry policy can hide local instability

The configuration uses two retries locally and zero retries in CI. This makes local failures less visible while CI has no retry evidence for distinguishing intermittent failures.

Recommendation: use a consistent, documented retry policy; retain traces on the first retry in CI and track flaky outcomes explicitly.

### Medium — Environment configuration is bypassed

Although `baseURL` is configured, most tests and page objects navigate to hard-coded external URLs. This prevents clean staging/local execution and duplicates environment knowledge.

Recommendation: navigate with relative paths and centralize external/API endpoints in typed configuration.

### Low — Selector and page-object conventions are inconsistent

The suite mixes roles, test attributes, CSS classes, `.first()`, and direct locators. Page objects import Playwright directly while tests use the TestDino wrapper. This increases maintenance cost and can select the wrong repeated element.

Recommendation: prefer role/test-id selectors, scope repeated product controls to a named product card, and standardize fixture/import boundaries.

## Positive observations

- Failure traces, screenshots, and videos are enabled.
- `forbidOnly` is enabled in CI.
- Core shopping flows use page objects.
- The suite includes accessibility, performance, security, API, visual, and network-testing examples.

## Recommended next actions

1. Remove committed secrets and rotate any values that may be real.
2. Separate intentional TestDino failure fixtures from the default suite.
3. Complete or remove placeholder tests and add outcome assertions.
4. Adopt `baseURL` and environment-backed test data throughout.
5. Standardize selectors and retry/flaky-test policy.
