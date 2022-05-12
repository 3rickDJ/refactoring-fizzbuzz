const ExplorerService = require('./../lib/services/ExplorerService')
const Reader = require('../lib/utils/Reader.js')
describe('Unit tests for ExplorerService', () => {
  test('1) Static functions of class ExplorerService', () => {
    const explorers = Reader.readJsonFile('./explorers.json')
    const explorersNode = ExplorerService.filterByMission(explorers, 'Node')
    expect(explorersNode).toBeDefined()
  })
})
