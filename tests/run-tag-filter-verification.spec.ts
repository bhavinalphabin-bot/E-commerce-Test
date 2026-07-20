import { expect, test } from '@testdino/playwright';

const tagVariations = [
  ['smoke'],
  ['smoke', 'regression'],
  ['smoke', 'regression', 'sanity'],
  ['smoke', 'regression', 'sanity', 'E2E'],
  ['smoke', 'regression', 'sanity', 'E2E', 'visual'],
];

for (const [index, expectedTags] of tagVariations.entries()) {
  const variation = String(index + 1);
  const label = expectedTags.length === 1 ? 'tag' : 'tags';

  test(`run tags: ${expectedTags.length} ${label} @run-tag-${variation}`, async () => {
    test.skip(
      process.env.TESTDINO_TAG_VARIATION !== variation,
      'Run this case through npm run test:run-tags.',
    );

    const configuredTags = (process.env.TESTDINO_TAGS || '')
      .split(',')
      .map(tag => tag.trim())
      .filter(Boolean);

    expect(configuredTags).toEqual(expectedTags);
  });
}
