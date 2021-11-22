const CustomException = require(".././exceptions/CustomException");
const Schedule = require("../jobs/Schedule");
const RandomUtils = require("../utils/RandomUtils");
const AirDiffuserScheduleItem = require("./AirDiffuserScheduleItem");

class AirDiffuser {
    constructor(id, name, essences, estimatedTime = null) {
        this.id = id;
        this.name = name;
        this.essences = essences;
        this.schedule = new Schedule([]);
        this.estimatedTime = estimatedTime;
        this.currentDiffusion = null; 
     }

     startDiffusing(slot) {
         if (!this.essences[slot - 1]) {
             throw new CustomException(`air diffuser does not have any essence on slot ${slot}`, 412);
         } 

         if (this.currentDiffusion !== null) {
             throw new CustomException(`you need to wait for the air diffuser to finish the current diffusion: ${this.currentDiffusion[0].name}`, 412)
         }
         
         let essence = this.essences.splice(slot - 1, 1);
         this.currentDiffusion = essence;

         let estimatedTime = 1000 * 30;

         this.estimatedTime = (new Date((+ new Date()) + estimatedTime)).toLocaleString();

         setTimeout(() => {
             this.currentDiffusion = null;
             this.estimatedTime = null;
         }, estimatedTime);

         return this.estimatedTime;
     }

     scheduleDiffusing(slot, startTimestamp) {
         this.schedule.add(new AirDiffuserScheduleItem(startTimestamp, this.essences[slot - 1].id, this), startTimestamp);
         return (new Date(startTimestamp)).toLocaleString();
     }

     cloneWithoutCircularReferences() {
        let clone = new AirDiffuser(this.id, this.name, this.essences, this.estimatedTime);
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