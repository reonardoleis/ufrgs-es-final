const ScheduleItem = require("./ScheduleItem");

class CourtainScheduleItem extends ScheduleItem {
    constructor(startTimestamp, state, speed, ref) {
        super(startTimestamp);
        this.state = state;
        this.speed = speed;
        this.ref = ref;
    }
}

module.exports = CourtainScheduleItem;