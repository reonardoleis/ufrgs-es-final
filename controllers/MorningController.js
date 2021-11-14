const CourtainRepository = new (require(".././repositories/CourtainRepository"));

class MorningController {
    constructor() {}

    getAll(req, res) {
        let courtains = CourtainRepository.getAll()
        return res.json(courtains);
    }

    setCourtainState(req, res) {
        return res.json({});
    }

    setCourtainSpeed(req, res) {
        return res.json({});
    }

}

module.exports = MorningController;