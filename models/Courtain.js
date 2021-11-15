const CustomException = require("../exceptions/CustomException");
const Schedule = require("../jobs/Schedule");
const CourtainScheduleItem = require("./CourtainScheduleItem");

const STATES = {
    "OPENED": "OPENED",
    "CLOSED": "CLOSED"
}

const SPEEDS = {
    "SLOW": "SLOW",
    "MEDIUM": "MEDIUM",
    "FAST": "FAST"
}

class Courtain {
    constructor(id, name, state, speed) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.speed = speed;
        this.schedule = new Schedule([]);
    }

    setSpeed(newSpeed) {
        if (!SPEEDS[newSpeed]) throw new CustomException(`invalid speed, try again with "SLOW", "MEDIUM" or "FAST"`, 400);
        this.speed = newSpeed;
    }

    setState(newState) {
        if (!STATES[newState]) throw new CustomException(`invalid state, try again with "OPENED" or "CLOSED"`, 400);
        this.state = newState;
    }

    scheduleStateWithSpeed(courtainState, speed, startTimestamp) {
        this.schedule.add(new CourtainScheduleItem(startTimestamp, courtainState, speed, this), startTimestamp);
    }

    cloneWithoutCircularReferences() {
        let clone = new Courtain(this.id, this.name, this.state, this.speed);
        clone.schedule = this.schedule.scheduleItems.map(item => {
            let newItem = new CourtainScheduleItem();
            newItem.id = item.id;
            newItem.startTimestamp = item.startTimestamp;
            newItem.state = item.state;
            newItem.speed = item.speed;
            return newItem;
        })
        return clone;
    }
}

module.exports = Courtain