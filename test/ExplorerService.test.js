const ExplorerService = require('./../lib/services/ExplorerService')
const Reader = require('../lib/utils/Reader.js')
describe('Unit tests for ExplorerService', () => {
  test('1) Static functions of class ExplorerService', () => {
    const explorers = Reader.readJsonFile('./explorers.json')
    const explorersInNode = ExplorerService.filterByMission(explorers, 'Node')
    const explorersHowManyInNode = ExplorerService.getAmountOfExplorersByMission(explorers, 'Node')
    const explorersInNodeUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, 'node')
    expect(explorersInNode[0].mission).toBe('node')
    expect(explorersHowManyInNode).toBe(10)
    expect(explorersInNodeUsernames[0].githubUsername).toBe('ajolonauta1')

  })
})
