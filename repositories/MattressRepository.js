const Mattress = require(".././models/Mattress");

const mattressDB = [
    new Mattress(1, "Colchão do Quarto", 1, 0),
    new Mattress(2, "Colchão da Sala", 2, 0)
]

const TemperatureSensorRepository = new (require("./TemperatureSensorRepository"));

class MattressRepository {
    constructor() {}

    getAll() {
        let mattresses = mattressDB.map(mattress => {
            mattress.temperatureSensorData = TemperatureSensorRepository.find(mattress.temperatureSensorId);
            return mattress;
        })
        return mattresses;
    }

    find(mattressId) {
        let mattress = mattressDB[mattressId - 1];
        if (!mattress) {
            return undefined;
        }
        mattress.temperatureSensorData = TemperatureSensorRepository.find(mattress.temperatureSensorId);
        return mattress;
    }

    updateTargetTemperature(mattressId, temperature) {
        if (this.find(mattressId)) {
            // the two next lines are implemented in order to simulate that updating mattress target
            // temperature really has effect on its sensor data.
            const sensor = TemperatureSensorRepository.find(mattressDB[mattressId - 1].temperatureSensorId).sensor;
            sensor.setTemperature(temperature);
            mattressDB[mattressId - 1].setTargetTemperature(temperature);
            return true;
        }
        return false;
    }
}

module.exports = MattressRepository;