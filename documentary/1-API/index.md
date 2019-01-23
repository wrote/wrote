## API

The package is available by importing its named functions:

```js
import {
  read, write, rm, ensurePath, readDirStructure,
  readBuffer, exists,
} from '@wrote/wrote'
```

%~%

## Packages

These packages are included in the meta-library.

```table
[
  ["Method", "Description", "Package"],
  ["`write`", "Writes a file.", "[@wrote/write](https://github.com/wrote/write)"],
  ["`read`", "Reads a file.", "[@wrote/read](https://github.com/wrote/read)"],
  ["`readBuffer`", "Reads a file as a buffer.", "[@wrote/read](https://github.com/wrote/read)"],
  ["`ensurePath`", "Creates all directories on the way to the path.", "[@wrote/ensure-path](https://github.com/wrote/ensure-path)"],
  ["`rm`", "Removes a file or directory.", "[@wrote/rm](https://github.com/wrote/rm)"],
  ["`readDirStructure`", "Reads a directory structure.", "[@wrote/rm](https://github.com/wrote/read-dir-structure)"],
  ["`exists`", "Checks if a file or directory exists and returns instance of Stats.", "[@wrote/exists](https://github.com/wrote/exists)"]
]
```

%~%