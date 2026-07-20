import { test, expect } from '@playwright/test';
import type { APIRequestContext } from '@playwright/test';

const apiBaseUrl = (process.env.TESTDINO_API_URL || 'https://api.testdino.com')
  .replace(/\/$/, '');
const projectId = process.env.TESTDINO_PROJECT_ID
  || 'project_961d2dd71e1c21b844676ddf';
const pat = process.env.TESTDINO_PAT;

async function getTokenInfo(request: APIRequestContext) {
  try {
    return await request.get(
      `${apiBaseUrl}/api/mcp/${encodeURIComponent(projectId)}/token-info`,
      {
        headers: {
          Authorization: `Bearer ${pat}`,
          Accept: 'application/json',
        },
      },
    );
  } catch {
    // Keep the authorization header out of Playwright's request error output.
    throw new Error('The token-info request could not reach the configured API.');
  }
}

test.describe('GET /{projectId}/token-info', () => {
  test.describe.configure({ retries: 0 });

  test('returns token information for an authorized project', async ({ request }) => {
    test.skip(!pat, 'Set TESTDINO_PAT to run this API test.');

    const response = await getTokenInfo(request);

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body: unknown = await response.json();
    expect(body).toBeTruthy();
    expect(typeof body).toBe('object');
  });
});
