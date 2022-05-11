
describe('Unit tests for Reader', () => {
  test('1) read JSON file', () => {
    //NOTE: When executing `npm test [test]`
    //jest executes from the [test]  file, and not from where you executed the command
    const Reader = require('../lib/utils/Reader.js')
    //NOTE: But when it executes from here, it takes the root directory as
    //     /refatoring_fizzbuzz
    const explorers = Reader.readJsonFile('./explorers.json')
    expect(explorers).not.toBeUndefined()
  })
})
