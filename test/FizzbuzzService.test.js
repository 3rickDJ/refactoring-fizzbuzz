const FizzbuzzService = require('../lib/services/FizzbuzzService')
const Reader = require('../lib/utils/Reader')
const explorers = Reader.readJsonFile('./explorers.json')
describe('Unit tests for FizzbuzzService', () => {
  test('1) testing validation function', () => {
    explorers.forEach((explorer) => {FizzbuzzService.applyValidationInExplorer(explorer)})
    expect(explorers[1].trick).toBe(explorers[1].score)
    expect(explorers[2].trick).toBe('FIZZ')
    expect(explorers[4].trick).toBe('BUZZ')
    expect(explorers[14].trick).toBe('FIZZBUZZ')
  })
})
