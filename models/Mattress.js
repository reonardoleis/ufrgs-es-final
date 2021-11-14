class Mattress {
    constructor(id, name, temperatureSensorId, targetTemperature) {
        this.id = id;
        this.name = name;
        this.temperatureSensorId = temperatureSensorId;
        this.targetTemperature = targetTemperature;
    }

    setTargetTemperature(targetTemperature) {
        this.targetTemperature = targetTemperature;
    }
}

module.exports = Mattress