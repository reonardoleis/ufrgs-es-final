const ScheduleItem = require("./ScheduleItem");

class CleaningRobotScheduleItem extends ScheduleItem {
    constructor(startTimestamp, ref) {
        super(startTimestamp);
        this.ref = ref;
    }
}

module.exports = CleaningRobotScheduleItem