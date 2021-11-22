const CleaningRobotRepository = new (require("../repositories/CleaningRobotRepository"));
const AirDiffuserRepository = new (require("../repositories/AirDiffuserRepository"));

class AfternoonController {

    getAllRobots(req, res) {
        let robots = CleaningRobotRepository.getAll();
        return res.json(robots);
    }

    getCleaningRobotData(req, res) {
        try {
            let robot = CleaningRobotRepository.find(req.params.id);
            return res.json(robot.cloneWithoutCircularReferences());
        } catch(e) {
            return res.status(e.code).json(e)
        }
    }

    startCleaning(req, res) {
        try {
            let robot = CleaningRobotRepository.find(req.body.robotId);
            let finishesAt = robot.startCleaning();
            return res.json({ message: `cleaning started and it will finish at ${(new Date(finishesAt)).toLocaleString()}` })
        } catch (e) {
            return res.status(e.code).json(e)
        }
    }

    scheduleCleaning(req, res) {
        try {
            let robot = CleaningRobotRepository.find(req.body.robotId);
            robot.scheduleCleaning(req.body.startTimestamp);
            return res.json({ message: `cleaning scheduled to start at ${(new Date(req.body.startTimestamp)).toLocaleString()}` })
        } catch (e) {
            return res.status(e.code).json(e);
        }
    }

    getAllAirDiffusers(req, res) {
        let airDiffusers = AirDiffuserRepository.getAll();
        return res.json(airDiffusers);
    }

    getAirDiffuserData(req, res) {
        try {
            let airDiffuser = AirDiffuserRepository.find(req.params.id);
            return res.json(airDiffuser.cloneWithoutCircularReferences());
        } catch (e) {
            return res.status(e.code).json(e)
        }
    }

    startDiffusing(req, res) {
        try {
            let airDiffuser = AirDiffuserRepository.find(req.body.airDiffuserId);
            let estimatedTime = airDiffuser.startDiffusing(req.body.slot);
            return res.json({ message: `started diffusing with estimated time of finish of ${estimatedTime}` });
        } catch (e) {
            return res.status(e.code).json(e)
        } 
    }

    scheduleDiffusing(req, res) {
        try {
            let airDiffuser = AirDiffuserRepository.find(req.body.airDiffuserId);
            let startDate = airDiffuser.scheduleDiffusing(req.body.slot, req.body.startTimestamp);
            return res.json({ message: `diffusing is scheduled to begin at ${startDate}` });
        } catch (e) {
            return res.status(e.code).json(e)
        }
    }
}

module.exports = AfternoonController