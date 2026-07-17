[![Test Health](https://stg-user.testdino.com/api/v1/badge/project_961d2dd71e1c21b844676ddf.svg)](https://stg-frontend.testdino.com/org_63bfc5f9ad53d2487b4f8a47/projects/project_961d2dd71e1c21b844676ddf) [![Flaky Tests](https://stg-user.testdino.com/api/v1/badge/project_961d2dd71e1c21b844676ddf.svg?type=flaky)](https://stg-frontend.testdino.com/org_63bfc5f9ad53d2487b4f8a47/projects/project_961d2dd71e1c21b844676ddf) [![Test Result](https://stg-user.testdino.com/api/v1/badge/project_961d2dd71e1c21b844676ddf.svg?type=tests)](https://stg-frontend.testdino.com/org_63bfc5f9ad53d2487b4f8a47/projects/project_961d2dd71e1c21b844676ddf)
# E-commerce-Test

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
