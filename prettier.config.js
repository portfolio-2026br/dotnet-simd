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
// Prettier configuration file
// More info at https://github.com/portfolio-2026br/dotnet-simd

module.exports = {
  // Overrides for Markdown
  overrides: [
    {
      files: ['**/*.md'],
      options: {
        proseWrap: 'always',
        printWidth: 120
      }
    },
    // Change the defaults for JavaScript, since linters don't understand each other.
    {
      files: ['**/*.js'],
      options: {
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    }
  ]
}
