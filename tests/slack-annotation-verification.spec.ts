import { expect, test } from '@testdino/playwright';

test('FAILED - Slack annotation notification verification', {
  annotation: {
    type: 'testdino:notify-slack',
    description: '#e2e-alerts',
  },
}, async () => {
  expect('notification verification failure').toBe('notification verification success');
});
