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
  readBuffer, exists,
} from '@wrote/wrote'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## Packages

These packages are included in the meta-library.

|       Method       |                             Description                             |                          Package                           |
| ------------------ | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `write` | Writes a file.                                                      | [@wrote/write](https://github.com/wrote/write)             |
| `read` | Reads a file.                                                       | [@wrote/read](https://github.com/wrote/read)               |
| `readBuffer` | Reads a file as a buffer.                                           | [@wrote/read](https://github.com/wrote/read)               |
| `ensurePath` | Creates all directories on the way to the path.                     | [@wrote/ensure-path](https://github.com/wrote/ensure-path) |
| `rm` | Removes a file or directory.                                        | [@wrote/rm](https://github.com/wrote/rm)                   |
| `readDirStructure` | Reads a directory structure.                                        | [@wrote/rm](https://github.com/wrote/read-dir-structure)   |
| `exists` | Checks if a file or directory exists and returns instance of Stats. | [@wrote/exists](https://github.com/wrote/exists)           |

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

<table>
<tr>
  <th>
    <a href="https://artd.eco">
      <img src="https://github.com/wrote/wrote/raw/master/images/artdeco.png" alt="Art Deco">
    </a>
  </th>
  <th>&copy; <a href="https://artd.eco">Art Deco</a> for <a href="https://wrote.cc">Wrote</a> 2019</th>
  <th>
    <a href="https://wrote.cc">
      <img src="https://github.com/wrote/wrote/raw/master/images/wrote.jpeg" alt="Wrote Library">
    </a>
  </th>
  <th>
    <a href="https://www.technation.sucks" title="Tech Nation Visa">
      <img src="https://github.com/wrote/wrote/raw/master/images/technation.gif" alt="Tech Nation Visa">
    </a>
  </th>
  <th>
    <a href="https://www.technation.sucks">Tech Nation Visa Sucks</a>
  </th>
</tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>