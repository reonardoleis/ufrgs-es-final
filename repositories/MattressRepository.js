const Mattress = require(".././models/Mattress");
const TemperatureSensor = require(".././models/TemperatureSensor");
const HumiditySensor = require(".././models/HumiditySensor");
const CustomException = require("../exceptions/CustomException");
const SleepQualitySensor = require("../models/SleepQualitySensor");

const mattressDB = [
    new Mattress(1, "Colchão do Quarto", new TemperatureSensor(), new HumiditySensor(50), new SleepQualitySensor(1), 0),
    new Mattress(2, "Colchão da Sala", new TemperatureSensor(), new HumiditySensor(10), new SleepQualitySensor(2), 0)
]

class MattressRepository {
    constructor() {}

    getAll() {
        return mattressDB;
    }

    find(mattressId) {
        let mattress = mattressDB[mattressId - 1];
        if (!mattress) {
            throw new CustomException("mattress not found", 404);
        }
 
        return mattress;
    }
}

module.exports = MattressRepository;