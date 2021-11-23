const CourtainRepository = new (require(".././repositories/CourtainRepository"));
const CoffeeMachineRepository = new (require(".././repositories/CoffeeMachineRepository"));

class MorningController {
    constructor() {}

    getCourtainData(req, res) {
       try {
        let courtain = CourtainRepository.find(req.params.id);
        courtain = courtain.cloneWithoutCircularReferences();
        return res.json(courtain);
       } catch (e) {
           return res.status(e.code).json(e);
       }
    }

    getAllCourtains(req, res) {
        let courtains = CourtainRepository.getAll()
        return res.json(courtains);
    }

    setCourtainState(req, res) {
        try {
            let courtain = CourtainRepository.find(req.body.courtainId);
            courtain.setState(req.body.courtainState);
            return res.json(courtain);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }

    setCourtainSpeed(req, res) {
        try {
            let courtain = CourtainRepository.find(req.body.courtainId);
            courtain.setSpeed(req.body.courtainSpeed);
            return res.json(courtain);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }

    scheduleCourtain(req, res) {
        try {
            let courtain = CourtainRepository.find(req.body.courtainId);
            courtain.scheduleStateWithSpeed(req.body.courtainState, req.body.courtainSpeed, req.body.startTimestamp);
            return res.json({ message: `courtain scheduled to open at ${(new Date(req.body.startTimestamp)).toLocaleString("pt-BR")} with ${req.body.courtainSpeed} speed`});
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }

    getAllCoffeeMachines(req, res) {
        let coffeeMachines = CoffeeMachineRepository.getAll();
        return res.json(coffeeMachines);
    }

    makeCoffee(req, res) {
        try {
            let coffeeMachine = CoffeeMachineRepository.find(req.body.coffeeMachineId);
            let result = coffeeMachine.makeCoffee(req.body.slot);
            return res.json({ estimatedTime: result });
        } catch (e) {
            return res.status(e.code).json(e)
        }
    }

    scheduleMakeCoffee(req, res) {
        try {
            let coffeeMachine = CoffeeMachineRepository.find(req.body.coffeeMachineId);
            let result = coffeeMachine.scheduleMakeCoffee(req.body.slot, req.body.startTimestamp);
            return res.json({ estimatedTime: result });
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }

    getCoffeeMachineData(req, res) {
        try {
            let coffeeMachine = CoffeeMachineRepository.find(req.params.id);
            return res.json(coffeeMachine);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }
}

module.exports = MorningController;