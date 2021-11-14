const router = require("express")();

const SensorController = new (require(".././controllers/SensorController"));
const MorningController = new (require(".././controllers/MorningController"));
const NightController = new (require(".././controllers/NightController"));

router.get("/sensors/temperature", SensorController.getAllTemperatureSensors);
router.get("/sensors/temperature/:id", SensorController.getTemperatureSensor);
router.get("/morning/courtains", MorningController.getAllCourtains);
router.get("/morning/coffee-machine", MorningController.getAllCoffeeMachines);
router.get("/morning/coffee-machine/:id", MorningController.getCoffeeMachineData);
router.post("/morning/coffee-machine/make", MorningController.makeCoffee);
router.post("/morning/coffee-machine/schedule", MorningController.scheduleMakeCoffee);
router.patch("/morning/courtain-state", MorningController.setCourtainState);
router.patch("/morning/courtain-speed", MorningController.setCourtainSpeed);
router.get("/night/mattress", NightController.getAllMattresses);
router.get("/night/mattress/:id", NightController.getMattress);
router.patch("/night/mattress-temperature", NightController.setMattressTemperature);

module.exports = router;