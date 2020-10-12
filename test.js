const test = require('myass')
const m = require('.')

test('Returns array of versions', async (t) => {
  const results = await m('node', 'v12')

  t.true(Array.isArray(results))
})

test('Returns all versions without a search query', async (t) => {
  const results = await m('node')

  t.true(results.length > 200)
})

test('Returns empty array if search fails', async (t) => {
  const results = await m('node', 'asdfjasfjklasfjklsa')

  t.is(results.length, 0)
})
