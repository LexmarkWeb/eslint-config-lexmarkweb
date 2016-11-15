module.exports = {
  extends: [
    'eslint:recommended',
    require.resolve('./rules/style.js')
  ],
  parserOptions: {
    ecmaVersion: 6
  }
};
