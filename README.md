# @wrote/wrote

[![npm version](https://badge.fury.io/js/%40wrote%2Fwrote.svg)](https://npmjs.org/package/@wrote/wrote)

`@wrote/wrote` is The Collection Of The Methods To Work With The Filesystem.

```sh
yarn add -E @wrote/wrote
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [Packages](#packages)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its named functions:

```js
import {
  read, write, rm, ensurePath, readDirStructure,
} from '@wrote/wrote'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## Packages

These packages are included in the meta-library.

|       Method       |                   Description                   |                          Package                           |
| ------------------ | ----------------------------------------------- | ---------------------------------------------------------- |
| `write` | Writes a file.                                  | [@wrote/write](https://github.com/wrote/write)             |
| `read` | Reads a file.                                   | [@wrote/read](https://github.com/wrote/read)               |
| `ensurePath` | Creates all directories on the way to the path. | [@wrote/ensure-path](https://github.com/wrote/ensure-path) |
| `rm` | Removes a file or directory.                    | [@wrote/rm](https://github.com/wrote/rm)                   |
| `readDirStructure` | Reads a directory structure.                    | [@wrote/rm](https://github.com/wrote/read-dir-structure)   |

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Wrote][1] 2019

[1]: https://wrote.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>