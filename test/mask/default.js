import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import wrote from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await wrote({
      text: input,
    })
    return res
  },
  context: Context,
})