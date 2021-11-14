const router = require("express")();

const SensorController = new (require(".././controllers/SensorController"));
const MorningController = new (require(".././controllers/MorningController"));

router.get("/sensor/temperature", SensorController.getCurrentTemperature);
router.get("/morning/courtains", MorningController.getAll)
router.patch("/morning/courtain-state", MorningController.setCourtainState);
router.patch("/morning/courtain-speed", MorningController.setCourtainSpeed);

module.exports = router;