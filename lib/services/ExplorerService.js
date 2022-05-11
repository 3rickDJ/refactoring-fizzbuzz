const Reader = require("./lib/utils/Reader")
const explorers = Reader.readJsonFile("explorers.json")
class ExplorerService {
  static filterByMission(explorers, mission){
    return explorers.filterByMission(explorer => explorer.mission == mission)
  }
  static
