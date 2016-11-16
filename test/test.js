
'use strict';

const assert = require('assert');
const eslint = require('eslint');
const fs = require('fs');

// This depends on presence of .eslintrc.json point to this repo

// Helper function to examine report output
function assertReportContains(report, msg) {
  let message = report.results[0].messages.reduce((a, m) => {
    return (m.ruleId === msg) ? m : a;
  }, null);
  assert.notEqual(null, message, 'Report did not contain ' + msg);
}

// Fluent interface
function expectReport(report) {
  return {
    contains: (msg) => {
      assertReportContains(report, msg);
    }
  };
}

/**
 * Put files in the good folder that should pass with no errors
 */
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

/**
 * Rather than test all the rules (which is only testing ESLint), put code
 * snippets here that we want to flag with some rule and make sure the rule
 * fires.
 */
describe('Bad Lint', () => {
  it('should find camelcase errors', () => {
    const report = new eslint.CLIEngine().executeOnText('var my_favorite_color = \'#112C85\';');
    expectReport(report).contains('camelcase');
  });

  it('should complain about tab characters', () => {
    const report = new eslint.CLIEngine().executeOnText('if (this) {\n\tthat();\n};');
    expectReport(report).contains('no-tabs');
  });
});
