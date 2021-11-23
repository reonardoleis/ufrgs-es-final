const Logger = require("../logger/Logger");
const AirDiffuserScheduleItem = require("../models/AirDiffuserScheduleItem");
const CleaningRobotScheduleItem = require("../models/CleaningRobotScheduleItem");
const CoffeeMachineScheduleItem = require("../models/CoffeeMachineScheduleItem");
const CourtainScheduleItem = require("../models/CourtainScheduleItem");

class Schedule {
    constructor(scheduleItems) {
        this.scheduleItems = scheduleItems;
        if (!this.scheduleItems) this.scheduleItems = [];
    }

    add(scheduleItem, startTimestamp) {
        let id = this.scheduleItems.length + 1;

        this.scheduleItems.push(scheduleItem);
        scheduleItem.id = id;

        let startIn = startTimestamp - (+ new Date());

        if (scheduleItem instanceof CoffeeMachineScheduleItem) {
            this._scheduleMakeCoffee(id, startIn, scheduleItem);
        } else if (scheduleItem instanceof CourtainScheduleItem) {
            this._scheduleStateWithSpeed(id, startIn, scheduleItem);
        } else if (scheduleItem instanceof CleaningRobotScheduleItem) {
            this._scheduleCleaning(id, startIn, scheduleItem);
        } else if (scheduleItem instanceof AirDiffuserScheduleItem) {
            this._scheduleDiffusing(id, startIn, scheduleItem);
        }
    }

    _scheduleMakeCoffee(id, startIn, scheduleItem) {
        setTimeout(() => {
            this.finish(id);
            Logger.log(`starting scheduled item: ${JSON.stringify(scheduleItem)}`);
            scheduleItem.ref.makeCoffee(scheduleItem.capsule);
        }, startIn);
    }

    _scheduleStateWithSpeed(id, startIn, scheduleItem) {
        setTimeout(() => {
            this.finish(id);
            Logger.log(`starting scheduled item: ${JSON.stringify(scheduleItem)}`);
            scheduleItem.ref.setState(scheduleItem.state);
            scheduleItem.ref.setSpeed(scheduleItem.speed);
        }, startIn);
    }

    _scheduleCleaning(id, startIn, scheduleItem) {
        setTimeout(() => {
            this.finish(id);
            Logger.log(`starting scheduled item: ${JSON.stringify(scheduleItem)}`);
            scheduleItem.ref.startCleaning();
        }, startIn);
    }

    _scheduleDiffusing(id, startIn, scheduleItem) {
        setTimeout(() => {
            this.finish(id);
            let slot = -1;
            scheduleItem.ref.essences.forEach((essence, index) => {
                if (essence.id === scheduleItem.essenceId) {
                    slot = index + 1
                    return
                }
            })

            try {
            scheduleItem.ref.startDiffusing(slot);
            Logger.log(`starting scheduled item: ${JSON.stringify(scheduleItem)}`);
            } catch (e) {
                Logger.log(`error while starting schedule: ${e.message}`)
            }
        }, startIn);
    }

    finish(id) {
        for (let i = 0; i < this.scheduleItems.length; i++) {
            if (this.scheduleItems[i].id == id) {
                this.scheduleItems.splice(i, 1);
                return;
            }
        }
    }
}

module.exports = Schedule;