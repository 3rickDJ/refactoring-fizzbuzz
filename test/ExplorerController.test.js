const ExplorerController = require("../lib/controllers/ExplorerController");
describe("Unit tests for ExplorerController", () => {
    test("1) Static functions", () => {
        const mission = "Node";
        const explorersInMission = ExplorerController.getExplorerByMission(mission);
        const explorerUsernames = ExplorerController.getExplorerUsernamesByMission(mission);
        const explorerAmount = ExplorerController.getExplorersAmountByMission(mission);
        expect(explorersInMission).toBeDefined();
        expect(explorerUsernames).toBeDefined();
        expect(explorerAmount).toBeDefined();
    });
});
