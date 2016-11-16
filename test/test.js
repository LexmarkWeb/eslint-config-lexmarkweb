
'use strict';

const assert = require('assert');
const eslint = require('eslint');

// This depends on presence of .eslintrc.json point to this repo

function assertReportContains(report, msg) {
  let message = report.results[0].messages.reduce((a, m) => {
    return (m.ruleId === msg) ? m : a;
  }, null);
  assert.notEqual(null, message, 'Report did not contain ' + msg);
}

describe('Good Lint', () => {
  it('should find nothing wrong with good files.', () => {
    const report = new eslint.CLIEngine().executeOnFiles(['./test/good/sample.js']);
    assert.equal(report.errorCount, 0);
    assert.equal(report.warningCount, 0);
    assert(report.results[0].filePath.endsWith('good/sample.js'));
  });
});

describe('Bad Lint', () => {
  it('should find camelcase errors', () => {
    const report = new eslint.CLIEngine().executeOnText("var my_favorite_color = '#112C85';");
    assertReportContains(report, 'camelcase');
  });
});
