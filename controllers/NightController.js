const MattressRepository = new (require(".././repositories/MattressRepository"));
const SpeakerRepository = new (require(".././repositories/SpeakerRepository"));

class NightController {
    constructor() { }

    getAllMattresses(req, res) {
        return res.json(MattressRepository.getAll());
    }

    getMattress(req, res) {
        try {
            let mattress = MattressRepository.find(req.params.id);
            return res.json(mattress);
        } catch(e) {
            return res.status(e.code).json(e);
        }
    }

    setMattressTemperature(req, res) {
        try {
            let mattress = MattressRepository.find(req.body.mattressId);
            mattress.setTargetTemperature(req.body.targetTemperature);
            return res.json(mattress);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }

    getAllSpeakers(req, res) {
        let speakers = SpeakerRepository.getAll();
        return res.json(speakers);
    }

    getSpeakerData(req, res) {
        try {
            let speaker = SpeakerRepository.find(req.params.id);
            return res.json(speaker);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }

    playSound(req, res) {
        try {
            let speaker = SpeakerRepository.find(req.body.speakerId);
            speaker.play();
            return res.json(speaker);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }

    stopSound(req, res) {
        try {
            let speaker = SpeakerRepository.find(req.body.speakerId);
            speaker.stop();
            return res.json(speaker);
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }

}

module.exports = NightController;