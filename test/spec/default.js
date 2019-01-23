import Context from '../context'
import {
  write, read, rm, ensurePath, readDirStructure,
  readBuffer, exists,
} from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'write is a function'({ assertFunction }) {
    assertFunction(write)
  },
  'read is a function'({ assertFunction }) {
    assertFunction(read)
  },
  'readBuffer is a function'({ assertFunction }) {
    assertFunction(readBuffer)
  },
  'ensurePath is a function'({ assertFunction }) {
    assertFunction(ensurePath)
  },
  'rm is a function'({ assertFunction }) {
    assertFunction(rm)
  },
  'readDirStructure is a function'({ assertFunction }) {
    assertFunction(readDirStructure)
  },
  'exists is a function'({ assertFunction }) {
    assertFunction(exists)
  },
}

export default T