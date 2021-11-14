require("dotenv").config();
const RandomUtils = require(".././utils/RandomUtils");

class TemperatureSensor {
    constructor() {
        this.lowestTemp = parseFloat(process.env.LOWEST_TEMP) || 0;
        this.highestTemp = parseFloat(process.env.HIGHEST_TEMP) || 36;
        const startingTemp = (this.lowestTemp + this.highestTemp) / 2;
        const tempDiff = process.env.TEMP_DIFF || 0.001 ;
        this.currentTemperature = startingTemp;
        setInterval(() => {
            let newDiff = RandomUtils.randomBetween(0, tempDiff) * RandomUtils.randomSignal();
            this.currentTemperature = this.currentTemperature + newDiff;
            this.currentTemperature = Math.max(this.currentTemperature, this.lowestTemp);
            this.currentTemperature = Math.min(this.currentTemperature, this.highestTemp);
        }, 1000)
    }

    getCurrentTemperature() {
        return this.currentTemperature;
    }

    setTemperature(newTemp) {
        this.highestTemp = newTemp + 2;
        this.lowestTemp = newTemp - 2;
        this.currentTemperature = newTemp;
    }
}

module.exports = TemperatureSensor;