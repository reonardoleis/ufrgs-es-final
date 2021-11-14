const TemperatureSensor = require("../models/TemperatureSensor");

const temperatureSensorDB = [
    {
        id: 1,
        name: "Sensor de temperatura do colchão 1",
        sensor: new TemperatureSensor(),
    },
    {
        id: 2,
        name: "Sensor de temperatura do colchão 2",
        sensor: new TemperatureSensor(),
    },
];

class TemperatureSensorRepository {
    constructor() {}

    getAll() {
        return temperatureSensorDB;
    }

    find(temperatureSensorId) {
        return temperatureSensorDB[temperatureSensorId - 1];
    }
}

module.exports = TemperatureSensorRepository;