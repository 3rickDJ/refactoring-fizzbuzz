// const Reader = require("./lib/utils/Reader")
// const explorers = Reader.readJsonFile("explorers.json")
class ExplorerService {
  static filterByMission(explorers, mission){
    return explorers.filter(explorer => explorer.mission == mission)
  }
  static getAmountOfExplorersByMission( explorers, mission){
    return explorers.filterByMission(explorer => explorer.mission == mission).length
  }
  static getExplorersUsernamesByMission(explorers, mission) {
    return explorers.filter(explorer => explorer.mission ==mission).map(explorer => explorer.githubUsername)
  }
}

module.exports = ExplorerService
