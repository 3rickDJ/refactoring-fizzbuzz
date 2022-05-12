//NOTE: When executing `npm test [test]`
// requirements: take the relative path starting from the this file
const Reader = require('../lib/utils/Reader.js')

describe('Unit tests for Reader', () => {
  test('1) read JSON file', () => {
    //NOTE: in any other case, take the relative path from where you did the command
    const explorers = Reader.readJsonFile('./explorers.json')
    expect(explorers).not.toBeUndefined()
  })
})
