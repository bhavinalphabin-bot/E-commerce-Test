const { spawnSync } = require('node:child_process');

const variations = [
  ['smoke'],
  ['smoke', 'regression'],
  ['smoke', 'regression', 'sanity'],
  ['smoke', 'regression', 'sanity', 'E2E'],
  ['smoke', 'regression', 'sanity', 'E2E', 'visual'],
];

const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const runPrefix = process.env.GITHUB_RUN_ID
  ? `ci-tag-variation-${process.env.GITHUB_RUN_ID}-${process.env.GITHUB_RUN_ATTEMPT || 1}`
  : `local-tag-variation-${Date.now()}`;

let failedRuns = 0;

for (const [index, tags] of variations.entries()) {
  const variation = String(index + 1);
  const label = tags.length === 1 ? 'tag' : 'tags';

  console.log(`\nRunning TestDino variation ${variation}: ${tags.length} ${label} (${tags.join(', ')})`);

  const result = spawnSync(
    npxCommand,
    [
      'playwright',
      'test',
      'tests/run-tag-filter-verification.spec.ts',
      '--grep',
      `@run-tag-${variation}`,
    ],
    {
      env: {
        ...process.env,
        TESTDINO_TAGS: tags.join(','),
        TESTDINO_TAG_VARIATION: variation,
        TESTDINO_CI_RUN_ID: `${runPrefix}-${variation}`,
      },
      stdio: 'inherit',
    },
  );

  if (result.status !== 0) {
    failedRuns += 1;
  }
}

if (failedRuns > 0) {
  console.error(`\n${failedRuns} TestDino tag variation run(s) failed.`);
  process.exit(1);
}

console.log('\nAll TestDino tag variation runs passed.');
