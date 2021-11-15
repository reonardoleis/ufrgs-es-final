const Schedule = require("../jobs/Schedule");
const RandomUtils = require("../utils/RandomUtils");
const CleaningRobotScheduleItem = require("./CleaningRobotScheduleItem");

const STATES = {
    "CLEANING": "CLEANING",
    "IDLE": "IDLE"
}

class CleaningRobot {
    constructor(id, state) {
        this.id = id;
        this.state = state;
        this.finishesAt = null;
        this.schedule = new Schedule([]);
    }

    startCleaning() {
        if (this.state === STATES.CLEANING) {
            return this.finishesAt;
        }

        this.state = STATES.CLEANING;

        let finishingPrevision = Math.floor(1000 * 60 * RandomUtils.randomBetween(4, 6));
        this.finishesAt =  (+ new Date()) + finishingPrevision;

        setTimeout(() => { this.state = STATES.IDLE; this.finishesAt = null; }, finishingPrevision);

        return this.finishesAt;
    }

    scheduleCleaning(startTimestamp) {
        this.schedule.add(new CleaningRobotScheduleItem(startTimestamp, this), startTimestamp);
    }

    cloneWithoutCircularReferences() {
        let clone = new CleaningRobot(this.id, this.state);
        clone.finishesAt = this.finishesAt;
        clone.schedule = this.schedule.scheduleItems.map(item => {
            let newItem = new CleaningRobotScheduleItem();
            newItem.id = item.id;
            newItem.startTimestamp = item.startTimestamp;
            return newItem;
        })
        return clone;
    }
}

module.exports = CleaningRobot