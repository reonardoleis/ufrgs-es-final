const CustomException = require("../exceptions/CustomException");
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
        let coffeeMachine = coffeMachineDB[coffeeMachineId - 1];
        
        if  (!coffeeMachine) {
            throw new CustomException("coffee machine not found", 404);
        }
        return coffeeMachine;
    }
}

module.exports = CoffeeMachineRepository;