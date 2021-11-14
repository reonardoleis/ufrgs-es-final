const CourtainRepository = new (require(".././repositories/CourtainRepository"));
const CoffeeMachineRepository = new (require(".././repositories/CoffeeMachineRepository"));

class MorningController {
    constructor() {}

    getAllCourtains(req, res) {
        let courtains = CourtainRepository.getAll()
        return res.json(courtains);
    }

    setCourtainState(req, res) {
        let result = CourtainRepository.setCourtainState(req.body.courtainId, req.body.courtainState);
    
        if (!result) {
            return res.status(404).json({ message: "courtain not found" });
        }

        let courtain = CourtainRepository.find(req.body.courtainId);
        return res.json(courtain);
    }

    setCourtainSpeed(req, res) {
        let result = CourtainRepository.setCourtainSpeed(req.body.courtainId, req.body.courtainSpeed);
    
        if (!result) {
            return res.status(404).json({ message: "courtain not found" });
        }

        let courtain = CourtainRepository.find(req.body.courtainId);
        return res.json(courtain);
    }

    getAllCoffeeMachines(req, res) {
        let coffeeMachines = CoffeeMachineRepository.getAll();
        return res.json(coffeeMachines);
    }

    makeCoffee(req, res) {
        let coffeeMachine = CoffeeMachineRepository.find(req.body.coffeeMachineId);
        if (!coffeeMachine) {
            return res.status(404).json({ message: "coffee machine not found" })
        }

        let result = coffeeMachine.makeCoffee(req.body.slot);
        if (!result) {
            return res.status(412).json({ message: "selected slot does not contains a capsule"});
        }

        return res.json({ estimatedTime: result });
    }

    scheduleMakeCoffee(req, res) {
        let coffeeMachine = CoffeeMachineRepository.find(req.body.coffeeMachineId);
        if (!coffeeMachine) {
            return res.status(404).json({ message: "coffee machine not found" })
        }

        let result = coffeeMachine.scheduleMakeCoffe(req.body.slot, req.body.startTimestamp);
        if (!result) {
            return res.status(412).json({ message: "selected slot does not contains a capsule"});
        }

        return res.json({ estimatedTime: result });
    }

    getCoffeeMachineData(req, res) {
        let coffeeMachine = CoffeeMachineRepository.find(req.params.id);
        if (!coffeeMachine) {
            return res.status(404).json({ message: "coffee machine not found" })
        }

        return res.json(coffeeMachine);
    }
}

module.exports = MorningController;