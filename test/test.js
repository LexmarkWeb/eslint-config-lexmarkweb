
'use strict';

const assert = require('assert');
const eslint = require('eslint');
const fs = require('fs');

// This depends on presence of .eslintrc.json point to this repo

function assertReportContains(report, msg) {
  let message = report.results[0].messages.reduce((a, m) => {
    return (m.ruleId === msg) ? m : a;
  }, null);
  assert.notEqual(null, message, 'Report did not contain ' + msg);
}

describe('Good Lint', () => {
  it('should find nothing wrong with good files.', () => {
    fs.realpath('./test/good', (err, path) => {
      var files = fs.readdirSync(path).map((name) => { return `${path}/${name}`; });
      const report = new eslint.CLIEngine().executeOnFiles(files);
      assert.equal(report.errorCount, 0);
      assert.equal(report.warningCount, 0);
      files.forEach((file, index) => {
        assert(report.results[index].filePath.endsWith(file));
      });
    });
  });
});

describe('Bad Lint', () => {
  it('should find camelcase errors', () => {
    const report = new eslint.CLIEngine().executeOnText('var my_favorite_color = \'#112C85\';');
    assertReportContains(report, 'camelcase');
  });

  it('should complain about tab characters', () => {
    const report = new eslint.CLIEngine().executeOnText('if (this) {\n\tthat();\n};');
    assertReportContains(report, 'no-tabs');
  });
});
