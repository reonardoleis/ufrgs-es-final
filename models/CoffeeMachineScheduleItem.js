const Schedule = require("./ScheduleItem");

class CoffeeMachineScheduleItem extends Schedule {
    constructor(startTimestamp, capsule) {
        super(startTimestamp);
        this.capsule = capsule;
    }
}

module.exports = CoffeeMachineScheduleItem;