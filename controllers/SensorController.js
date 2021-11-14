require("dotenv").config();
const RandomUtils = require(".././utils/RandomUtils");

class SensorController {
    constructor() {
        const lowestTemp = process.env.LOWEST_TEMP || 0;
        const highestTemp = process.env.HIGHEST_TEMP || 36;
        const startingTemp = (lowestTemp + highestTemp) / 2;
        const tempDiff = process.env.TEMP_DIFF || 0.001 ;
        console.log(lowestTemp, highestTemp, tempDiff)
        this.currentTemperature = startingTemp;
        setInterval(() => {
            let newDiff = RandomUtils.randomBetween(0, tempDiff) * RandomUtils.randomSignal();
            this.currentTemperature = this.currentTemperature + newDiff;
            this.currentTemperature = Math.max(this.currentTemperature, lowestTemp);
            this.currentTemperature = Math.min(this.currentTemperature, highestTemp);
        }, 1000)
    }

    getCurrentTemperature = (req, res) => {
        return res.json({ currentTemperature: this.currentTemperature});
    }
}

module.exports = SensorController;