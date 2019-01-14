/* yarn example/ */
import wrote from '../src'

(async () => {
  const res = await wrote({
    text: 'example',
  })
  console.log(res)
})()