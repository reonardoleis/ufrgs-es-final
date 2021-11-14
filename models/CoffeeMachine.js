const RandomUtils = require("../utils/RandomUtils");
const CoffeeMachineSchedule = require("../models/CoffeeMachineSchedule");
const Logger = require(".././logger/Logger");

class CoffeeMachine {
    constructor(id, name, capsules) {
        this.id = id;
        this.name = name;
        this.capsules = capsules;
        this.schedule = [];
    }

    makeCoffee(slot) {
        if (!this.capsules[slot - 1]) {
            return false;
        }

        this.capsules.splice(slot - 1, 1);

        return new Date(+(new Date()) + (1000 * 60 * RandomUtils.randomBetween(4, 6))).toLocaleString();
    }

    scheduleMakeCoffe(slot, startTimestamp) {
        if (!this.capsules[slot - 1]) {
            return false;
        }

        let id = this.schedule.length + 1;
        this.schedule.push(new CoffeeMachineSchedule(id, startTimestamp, this.capsules[slot - 1]));

        let startIn = startTimestamp - (+ new Date());
        setTimeout(() => {
            this.finishSchedule(id);
            Logger.log("starting scheduled coffee...")
        }, startIn);

        this.capsules.splice(slot - 1, 1);
        return new Date(startTimestamp + (1000 * 60 * RandomUtils.randomBetween(4, 6))).toLocaleString();
    }

    finishSchedule(scheduleId) {
        for (let i = 0; i < this.schedule.length; i++) {
            if (this.schedule[i].id == scheduleId) {
                this.schedule.splice(i, 1);
                return;
            }
        }
    }
}

module.exports = CoffeeMachine;