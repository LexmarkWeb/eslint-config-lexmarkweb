
'use strict';

const assert = require('assert');
const eslint = require('eslint');
const conf = require('../');


// Use the rules defined in this repo to test against.
const eslintOpts = {
  envs: ['node', 'es6'],
  useEslintrc: false,
  rules: conf.rules,
};

describe('Good Lint', () => {
  it('should find nothing wrong with good files.', () => {
    const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(['./test/good/sample.js']);
    assert.equal(report.errorCount, 0);
    assert.equal(report.warningCount, 0);
    assert(report.results[0].filePath.endsWith('good/sample.js'));
  });
});

describe('Bad Lint', () => {
  it('sould find error with bad file', () => {

  });
});
