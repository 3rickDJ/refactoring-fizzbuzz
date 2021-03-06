const ExplorerService = require("../services/ExplorerService.js");
// const FizzbuzzService = require("../services/FizzbuzzService.js");
const Reader = require("../utils/Reader.js");
class ExplorerController {
    static getExplorerByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }
    static getExplorerUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
}
module.exports = ExplorerController;
