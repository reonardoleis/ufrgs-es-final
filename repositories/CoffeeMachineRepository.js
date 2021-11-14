const Capsule = require("../models/Capsule");
const CoffeeMachine = require("../models/CoffeeMachine");

const coffeMachineDB = [
    new CoffeeMachine(1, "Máquina Três Corações", [new Capsule("Chocolatto Caramelo"), new Capsule("Ristretto"), new Capsule("Chá Verde")]),
    new CoffeeMachine(2, "Máquina Dolce Gusto", [new Capsule("Starbucks American"), new Capsule("Starbucks Latte")]),
]

class CoffeeMachineRepository {
    constructor() { }

    getAll() {
        return coffeMachineDB;
    }

    find(coffeeMachineId) {
        return coffeMachineDB[coffeeMachineId - 1];
    }
}

module.exports = CoffeeMachineRepository;