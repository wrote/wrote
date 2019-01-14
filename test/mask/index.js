import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import wrote from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await wrote({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
