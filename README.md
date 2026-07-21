[![Test Health](https://stg-user.testdino.com/api/v1/badge/project_961d2dd71e1c21b844676ddf.svg)](https://stg-frontend.testdino.com/org_63bfc5f9ad53d2487b4f8a47/projects/project_961d2dd71e1c21b844676ddf) [![Flaky Tests](https://stg-user.testdino.com/api/v1/badge/project_961d2dd71e1c21b844676ddf.svg?type=flaky)](https://stg-frontend.testdino.com/org_63bfc5f9ad53d2487b4f8a47/projects/project_961d2dd71e1c21b844676ddf) [![Test Result](https://stg-user.testdino.com/api/v1/badge/project_961d2dd71e1c21b844676ddf.svg?type=tests)](https://stg-frontend.testdino.com/org_63bfc5f9ad53d2487b4f8a47/projects/project_961d2dd71e1c21b844676ddf)
# E-commerce-Test

## Running tests

Run the suite with:

```bash
npm test
```

The test entry point accepts Playwright's `--workers` option and also
normalizes the `--max-workers` spelling used by some hosted runners. For
example, both of these commands run with two Playwright workers:

```bash
npm test -- --workers=2
npm test -- --max-workers=2
```

## TestDino MCP

The project pins TestDino MCP 1.1.0 from `testdino-mcp-1.1.0 (3).tgz` and
configures Codex in `.codex/config.toml`. The project config overrides the MCP
command so it runs this exact local package while retaining the `TESTDINO_PAT`
and `TESTDINO_API_URL` from the user's global `testdino-stg` Codex config.
Credentials are not duplicated in this repository.

After cloning or changing the MCP archive, run:

```bash
npm install
```

Restart Codex after installing so it reloads the project MCP configuration.
