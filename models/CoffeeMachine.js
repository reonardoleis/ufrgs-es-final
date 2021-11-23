const RandomUtils = require("../utils/RandomUtils");
const CoffeeMachineScheduleItem = require("./CoffeeMachineScheduleItem");
const Schedule = require("../jobs/Schedule");
const CustomException = require("../exceptions/CustomException");

class CoffeeMachine {
    constructor(id, name, capsules) {
        this.id = id;
        this.name = name;
        this.capsules = capsules;
        this.schedule = new Schedule([]);
        this.currentCapsule = null;
        this.estimatedTime = null;
    }

    makeCoffee(slot) {
        if (!this.capsules[slot - 1]) {
            throw new CustomException("selected slot does not have any capsules", 412)
        }

        if (this.currentCapsule !== null) {
            throw new CustomException("coffee machine is already making a coffee", 412);
        }

        let capsule = this.capsules.splice(slot - 1, 1);
        this.currentCapsule = capsule;

        let estimatedTime =  1000 * 60 * RandomUtils.randomBetween(4, 6);
        this.estimatedTime = new Date(+ (new Date()) + estimatedTime).toLocaleString("pt-BR");
        setTimeout(() => {
            this.currentCapsule = null;
            this.estimatedTime = null;
        }, estimatedTime);

        return this.estimatedTime;
    }

    scheduleMakeCoffee(slot, startTimestamp) {
        if (!this.capsules[slot - 1]) {
            return false;
        }

        this.schedule.add(new CoffeeMachineScheduleItem(this, startTimestamp, slot), startTimestamp);

        this.capsules.splice(slot - 1, 1);
        return new Date(startTimestamp + (1000 * 60 * RandomUtils.randomBetween(4, 6))).toLocaleString("pt-BR");
    }
    
    cloneWithoutCircularReferences() {
        let clone = new CoffeeMachine(this.id, this.name, this.capsules);
        clone.schedule = this.schedule.scheduleItems.map(item => {
            let newItem = new CoffeeMachineScheduleItem();
            newItem.id = item.id;
            newItem.startTimestamp = item.startTimestamp;
            return newItem;
        });
        clone.currentCapsule = this.currentCapsule;
        clone.estimatedTime = this.estimatedTime;

        return clone;
    }
}

module.exports = CoffeeMachine;