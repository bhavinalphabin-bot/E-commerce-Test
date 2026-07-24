# TestDino Playwright coverage setup

This repository contains Playwright automation only. The frontend source and build configuration are not present, so coverage collection is configured on the Playwright side, but the frontend team must provide a separate Istanbul-instrumented deployment.

TestDino coverage requires all three of the following:

1. `@testdino/playwright` with its coverage-aware `test` fixture.
2. The TestDino streaming reporter with `coverage.enabled: true`.
3. A tested browser page where `window.__coverage__` contains Istanbul data.

A normal staging or production build usually is not instrumented and will show **No Coverage Data Found**. Use a coverage-enabled QA build; never expose an instrumented build in production because it increases bundle size and reveals source paths.

## Installed tooling

- `@playwright/test` remains the Playwright test runner.
- `@testdino/playwright` supplies the streaming reporter, coverage auto-fixture, and `tdpw test` command.
- The separate legacy `tdpw` upload package is not needed for streaming coverage and has been removed to avoid an executable-name conflict.

TestDino generates its Istanbul HTML output in `./coverage`. `npm run test:coverage:report` copies that generated report to the repository-standard `./coverage-report` directory after a successful run.

## Environment variables

This repository loads its existing `utils/.env` file. Configure these variables there:

```dotenv
TESTDINO_TOKEN=
TESTDINO_DEBUG=false
BASE_URL=
VERIFY_COVERAGE=false
```

- `TESTDINO_TOKEN` is required for TestDino streaming. Treat it as a secret.
- `TESTDINO_DEBUG=true` enables reporter diagnostics.
- `BASE_URL` must point to the instrumented frontend, for example `http://localhost:3000` or a dedicated QA deployment.
- `VERIFY_COVERAGE=true` opts into the diagnostic assertion. It is off by default so ordinary staging runs do not fail.

Do not print the token in CI logs. Keep `utils/.env` out of future commits and rotate any credentials that have previously been exposed or committed.

## Frontend instrumentation required in the application repository

The frontend team must instrument source code with Istanbul and deploy that build at the `BASE_URL` used by Playwright. The exact setup belongs in the frontend repository.

For a Vite application, install `vite-plugin-istanbul`, add it to the existing plugin list with the relevant source extensions and exclusions, and enable it only for coverage builds:

```ts
istanbul({
  include: ['src/**/*'],
  exclude: [
    'node_modules',
    'test',
    'tests',
    'dist',
    '**/*.spec.*',
    '**/*.test.*',
    '**/*.stories.*',
    '**/mocks/**',
  ],
  extension: ['.js', '.jsx', '.ts', '.tsx'],
  requireEnv: true,
})
```

Then start or build it with:

```bash
VITE_COVERAGE=true npm run dev
```

For Babel-based React or Next.js projects, install `babel-plugin-istanbul` and enable it only in the test/coverage environment while preserving existing presets and plugins. For other build systems, use their supported Istanbul integration. Instrumentation should include application source and exclude tests, generated output, stories, mocks, dependencies, and configuration files.

## Verify instrumentation

Open the tested application in a browser and evaluate:

```js
window.__coverage__
```

The expected result is an object keyed by instrumented source files. `undefined` means the frontend build is not instrumented.

The repository also provides an opt-in Playwright diagnostic:

```bash
export BASE_URL="http://localhost:3000"
npm run verify:coverage
```

It navigates to `/`, waits for the document to load, and fails with a clear message when `window.__coverage__` is unavailable. Without `VERIFY_COVERAGE=true`, the diagnostic spec is skipped.

## Run coverage locally

```bash
export TESTDINO_TOKEN="replace-with-your-token"
export BASE_URL="http://localhost:3000"
export TESTDINO_DEBUG="true"

npm run test:coverage
```

Generate the normalized local HTML report:

```bash
npm run test:coverage:report
```

After an instrumented run, open `coverage-report/index.html`. The streaming reporter also sends coverage metrics and per-file hit counts to the TestDino Coverage tab; it does not require the legacy `tdpw upload` flow.

## CI

The existing four-shard Playwright job is preserved. All shards share the existing `ciRunId`, and TestDino officially merges their coverage on the server.

The workflow also has a manually triggered, non-sharded `coverage` job. Add these GitHub Actions repository secrets:

- `TESTDINO_TOKEN`: TestDino API token.
- `COVERAGE_BASE_URL`: URL of a deployed Istanbul-instrumented frontend.

Run **Playwright Tests** from GitHub Actions with **Run workflow**. The optional job uses Chromium, verifies instrumentation through the TestDino coverage runner, and uploads `coverage-report` as an artifact. It does not run the full suite or change the regular sharded jobs.

## Troubleshooting

- **No Coverage Data Found / no local report:** verify `window.__coverage__`, `BASE_URL`, and that the deployed build was created with instrumentation enabled.
- **Tests pass but coverage is empty:** confirm specs import `test` from `@testdino/playwright` and the reporter has `coverage.enabled: true`.
- **Only some files appear:** Istanbul reports files loaded by exercised code paths; check the frontend instrumentation include/exclude rules.
- **No TestDino run appears:** confirm `TESTDINO_TOKEN`, the reporter server settings, and enable `TESTDINO_DEBUG=true` locally.
- **CI shards appear separately:** confirm all shards receive the same GitHub run ID/attempt and use the same TestDino token.
- **Diagnostic is skipped:** use `npm run verify:coverage`, which sets `VERIFY_COVERAGE=true`.

Reference: [TestDino Playwright Code Coverage](https://docs.testdino.com/guides/playwright-code-coverage)
