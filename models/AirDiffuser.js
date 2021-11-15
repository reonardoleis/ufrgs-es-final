const CustomException = require(".././exceptions/CustomException");
const Schedule = require("../jobs/Schedule");
const RandomUtils = require("../utils/RandomUtils");
const AirDiffuserScheduleItem = require("./AirDiffuserScheduleItem");

class AirDiffuser {
    constructor(id, name, essences) {
        this.id = id;
        this.name = name;
        this.essences = essences;
        this.schedule = new Schedule([]);
        this.currentDiffusion = null; 
     }

     startDiffusing(slot) {
         if (!this.essences[slot - 1]) {
             throw new CustomException(`air diffuser does not have any essence on slot ${slot}`, 412);
         } 
         
         let essence = this.essences.splice(slot - 1, 1);
         this.currentDiffusion = essence;

         let estimatedTime = 1000 * 30;

         setTimeout(() => {
             this.currentDiffusion = null;
         }, estimatedTime);

         return (new Date((+ new Date()) + estimatedTime)).toLocaleString();
     }

     scheduleDiffusing(slot, startTimestamp) {
         this.schedule.add(new AirDiffuserScheduleItem(startTimestamp, this.essences[slot - 1].id, this), startTimestamp);
         return (new Date(startTimestamp)).toLocaleString();
     }

     cloneWithoutCircularReferences() {
        let clone = new AirDiffuser(this.id, this.name, this.essences);
        clone.currentDiffusion = this.currentDiffusion;
        clone.schedule = this.schedule.scheduleItems.map(item => {
            let newItem = new AirDiffuserScheduleItem();
            newItem.id = item.id;
            newItem.startTimestamp = item.startTimestamp;
            newItem.essenceId = item.essenceId;
            return newItem;
        })
        return clone;
    }
}

module.exports = AirDiffuser