require("dotenv").config();
const RandomUtils = require(".././utils/RandomUtils");
const TemperatureSensorRepository = new (require(".././repositories/TemperatureSensorRepository"));


class SensorController {
    constructor() { }

    getAllTemperatureSensors(req, res) {
        return res.json(TemperatureSensorRepository.getAll());
    }

    getTemperatureSensor(req, res) {
        return res.json(TemperatureSensorRepository.find(req.params.id));
    }
}

module.exports = SensorController;