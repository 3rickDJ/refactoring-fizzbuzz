class ExplorerService {
    static filterByMission(explorers, mission) {
        return explorers.filter(explorer => explorer.mission == mission.toLowerCase());
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        return explorers.filter(explorer => explorer.mission == mission.toLowerCase()).length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        return explorers.filter(explorer => explorer.mission == mission.toLowerCase()).map(explorer => {return {githubUsername : explorer.githubUsername};});
    }
}

module.exports = ExplorerService;
