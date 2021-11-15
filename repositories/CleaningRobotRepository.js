const CleaningRobot = require(".././models/CleaningRobot");
const CustomException = require(".././exceptions/CustomException");

const cleaningRobotDB = [
    new CleaningRobot(1, "IDLE"),
    new CleaningRobot(2, "IDLE")
]

class CleaningRobotRepository {
    constructor() {}

    getAll() {
        return cleaningRobotDB.map(item => item.cloneWithoutCircularReferences());
    }

    find(robotId) {
        let robot = cleaningRobotDB[robotId - 1];
        if (!robot) {
            throw new CustomException("cleaning robot not found", 404)
        }
        return robot;
    }
}

module.exports = CleaningRobotRepository