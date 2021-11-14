const MattressRepository = new (require(".././repositories/MattressRepository"));

class NightController {
    constructor() { }

    getAllMattresses(req, res) {
        return res.json(MattressRepository.getAll());
    }

    getMattress(req, res) {
        let result = MattressRepository.find(req.params.id);
        if (!result) {
            return res.status(404).send({ message: "Mattress not found" });
        }

        return res.json(result);
    }

    setMattressTemperature(req, res) {
        let result = MattressRepository.updateTargetTemperature(req.body.mattressId, req.body.temperature);
        if (!result) {
            return res.status(404).send({ message: "Mattress not found" });
        }

        let foundMattress = MattressRepository.find(req.body.mattressId);
        return res.json(foundMattress);
    }
}

module.exports = NightController;