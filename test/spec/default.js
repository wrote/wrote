import { equal } from 'zoroaster/assert'
import Context from '../context'
import { write, read, rm, ensurePath } from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'write is a function'() {
    equal(typeof write, 'function')
  },
  'read is a function'() {
    equal(typeof read, 'function')
  },
  'ensurePath is a function'() {
    equal(typeof ensurePath, 'function')
  },
  'rm is a function'() {
    equal(typeof rm, 'function')
  },
}

export default T