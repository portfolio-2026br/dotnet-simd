// ################################################################################
//  Copyright (c) 2026  Claudio André <portfolio-2026br at claudioandre.slmail.me>
//              ___                _      ___       _
//             (  _`\             ( )_  /'___)     (_ )  _
//             | |_) )  _    _ __ | ,_)| (__   _    | | (_)   _
//             | ,__/'/'_`\ ( '__)| |  | ,__)/'_`\  | | | | /'_`\
//             | |   ( (_) )| |   | |_ | |  ( (_) ) | | | |( (_) )
//             (_)   `\___/'(_)   `\__)(_)  `\___/'(___)(_)`\___/'
//
// This program comes with ABSOLUTELY NO WARRANTY; express or implied.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, as expressed in version 2, seen at
// https://www.gnu.org/licenses/gpl-2.0.html
// ################################################################################
// Commit linter configuration file
// More info at https://github.com/portfolio-2026br/dotnet-simd

module.exports = {
  extends: ['@commitlint/config-conventional'],
  helpUrl: 'https://www.conventionalcommits.org/',
  // See https://github.com/dependabot/dependabot-core/issues/2445
  ignores: [(msg) => /Signed-off-by: dependabot\[bot]/m.test(msg)],

  rules: {
    'body-case': [2, 'always', 'sentence-case'],
    'body-max-line-length': [1, 'always', 120],
    'header-max-length': [1, 'always', 55],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'deprecate',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'remove',
        'revert',
        'security',
        'style',
        'test'
      ]
    ]
  }
}
