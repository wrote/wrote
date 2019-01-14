import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import wrote from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof wrote, 'function')
  },
  async 'calls package without error'() {
    await wrote()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await wrote({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T