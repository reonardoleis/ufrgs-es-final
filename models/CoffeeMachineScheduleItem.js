const Schedule = require("./ScheduleItem");

class CoffeeMachineScheduleItem extends Schedule {
    constructor(ref, startTimestamp, capsule) {
        super(startTimestamp);
        this.capsule = capsule;
        this.ref = ref;
    }
}

module.exports = CoffeeMachineScheduleItem;