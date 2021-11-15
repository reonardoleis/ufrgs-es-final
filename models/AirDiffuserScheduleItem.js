const ScheduleItem = require("./ScheduleItem");

class AirDiffuserScheduleItem extends ScheduleItem{
    constructor(startTimestamp, essenceId, ref) {
        super(startTimestamp);
        this.essenceId = essenceId;
        this.ref = ref;
    }
}

module.exports = AirDiffuserScheduleItem;