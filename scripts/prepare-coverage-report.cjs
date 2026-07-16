const { cpSync, existsSync, rmSync } = require('node:fs');

const sourceDirectory = 'coverage';
const reportDirectory = 'coverage-report';

if (!existsSync(sourceDirectory)) {
  throw new Error(
    'TestDino did not create ./coverage. Confirm the frontend exposes window.__coverage__ and try again.',
  );
}

rmSync(reportDirectory, { recursive: true, force: true });
cpSync(sourceDirectory, reportDirectory, { recursive: true });

console.log(`Local TestDino coverage report: ${reportDirectory}/index.html`);
