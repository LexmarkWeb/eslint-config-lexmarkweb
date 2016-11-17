# eslint-config-lexmarkweb
ESLint config for Lexmark web team

## Introduction

[ESLint](http://eslint.org) provides static code analysis for Javascript. It
looks through your code and makes sure it conforms to standards. The rules here
are the standards for the [Lexmark Global Web Team](http://www.lexmark.com).

## Getting Started

We assume Mac users have [homebrew](http://brew.sh/) installed already. Windows
and Linux users follow a similar process.

1. Install nodejs `brew install node`
2. Install eslint `npm install -g eslint eslint-config-lexmarkweb`
3. Create a file in your home directory `~/.eslintrc` that contains `extends: lexmarkweb`

## Integration

**AFTER** following the Getting Started instructions above, here is how you use ESLint.
- Command line
  1. From commandline type `eslint file.js`
  2. To fix issues automatically you can type `eslint --fix file.js`.
  The `file.js` will be modified directly.


- [Atom](https://atom.io/packages/linter-eslint)
  1. From `Atom | Preferences... | Packages` search for `linter-eslint`
  2. Install the package
  3. Package Settings
    - Set `Global Node Installation Path` to `/usr/local`
    - Set `Use global ESLint installation`
  4. When you open a Javascript file errors will be highlighted.


- [SublimeText](https://github.com/roadhump/SublimeLinter-eslint)
  1. Choose `Tools | Install Package Control...` if you have not done that already.
  2. From `Tools | Command Pallette` type install and select `Package control: Install Package`
  3. Type `SublimeLinter` and install the SublimeLinter package.
  4. From `Tools | Command Pallette` type install and select `Package control: Install Package`
  5. Type `contrib-eslint` and install the `submlimelinter-contrinb-eslint` package.
  6. When you open a Javascript file errors will be highlighted.


- [IntelliJ](http://plugins.jetbrains.com/plugin/7494)
  1. From `IntelliJ Idea | Preferences | Plugins` click `Browse repositories...` and search for ESLint.
  2. Restart IntelliJ
  3. From `IntelliJ Idea | Preferences | Other Settings | ESLint`
    - Check enable
    - Set `Node interpretter` to `/usr/local/bin/node`
    - Set `Path to eslint bin` to `/usr/local/bin/eslint`
    - Select `Let eslint search for .eslint up the folder tree`
  4. When you open a Javascript file errors will be highlighted.


- [VIM](https://github.com/vim-syntastic/syntastic).
  If you use VIM you don't need step by step instructions. :wink:

See the ESLint site for [other integrations](http://eslint.org/docs/user-guide/integrations)
