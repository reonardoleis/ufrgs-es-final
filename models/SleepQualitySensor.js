const RandomUtils = require(".././utils/RandomUtils");

class SleepQualitySensor {
    constructor(mattressId) {
        this.stressLevel = RandomUtils.randomBetween(0, 100);
        this.mattressId = mattressId; // the sleep quality sensor belongs to (is "inside") some mattress
        // every 5 seconds it calculates a new "fake" stress level
        setInterval(() => {
            this.stressLevel = RandomUtils.randomBetween(0, 100);
        }, 1000 * 5)
    }
}

module.exports = SleepQualitySensor