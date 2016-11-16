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

- [Atom](https://atom.io/packages/linter-eslint)
- [SublimeText](https://github.com/roadhump/SublimeLinter-eslint)
- [IntelliJ](http://plugins.jetbrains.com/plugin/7494)
- [VIM](https://github.com/vim-syntastic/syntastic)
See the ESLint site for [other integrations](http://eslint.org/docs/user-guide/integrations)
