require("dotenv").config();
const Logger = require("../logger/Logger");
const RandomUtils = require("../utils/RandomUtils");

class Mattress {
    constructor(id, name, temperatureSensor, humiditySensor, sleepQualitySensor, targetTemperature) {
        this.id = id;
        this.name = name;
        this.temperatureSensor = temperatureSensor;
        this.humiditySensor = humiditySensor;
        this.sleepQualitySensor = sleepQualitySensor;
        this.targetTemperature = targetTemperature;
        setInterval(() => {
            if (this.targetTemperature != 0) {
                this.targetTemperature = this.computeBestTemperature();
            }
        }, 1000);
    }

    setTargetTemperature(targetTemperature) {
        this.targetTemperature = targetTemperature;
    }

    computeBestTemperature() {
        if (Math.abs(this.targetTemperature - this.temperatureSensor.getCurrentTemperature()) >= process.env.MAX_TEMP_DIFF || 2) {
            Logger.log(`setting new target temperature of mattress ${this.id}`);
            let bestTemperature = this.targetTemperature + RandomUtils.randomSignal() * ((this.humiditySensor.level - 50) * 0.05);
            this.temperatureSensor.setTemperature(Math.max(bestTemperature, process.env.LOWEST_TEMP));
            return bestTemperature;
        }
        return this.targetTemperature;
    }
}

module.exports = Mattress