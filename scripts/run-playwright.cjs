#!/usr/bin/env node

const { spawnSync } = require('node:child_process');

// Some hosted runners use Jest's --max-workers option when invoking npm test.
// Playwright calls the same setting --workers, so normalize that one option and
// leave every other Playwright argument unchanged.
const args = [];
for (let index = 2; index < process.argv.length; index += 1) {
  const argument = process.argv[index];

  if (argument === '--max-workers') {
    args.push('--workers');
    if (index + 1 < process.argv.length) {
      args.push(process.argv[index + 1]);
      index += 1;
    }
    continue;
  }

  if (argument.startsWith('--max-workers=')) {
    args.push(`--workers=${argument.slice('--max-workers='.length)}`);
    continue;
  }

  args.push(argument);
}

const playwrightCli = require.resolve('@playwright/test/cli');
const result = spawnSync(process.execPath, [playwrightCli, 'test', ...args], {
  env: process.env,
  stdio: 'inherit',
});

if (result.error) {
  console.error(`Unable to start Playwright: ${result.error.message}`);
  process.exit(1);
}

process.exit(result.status ?? 1);
