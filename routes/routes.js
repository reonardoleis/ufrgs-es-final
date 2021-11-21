const MorningController = new (require(".././controllers/MorningController"));
const AfternoonController = new (require(".././controllers/AfternoonController"));
const NightController = new (require(".././controllers/NightController"));
const express = require('express');
const path = require('path');


class Routes {
    constructor(app) {
        this.app = app;
    }

    setup() {
        this.app.get("/morning/courtain", MorningController.getAllCourtains);
        this.app.get("/morning/courtain/:id", MorningController.getCourtainData);
        this.app.patch("/morning/courtain-state", MorningController.setCourtainState);
        this.app.patch("/morning/courtain-speed", MorningController.setCourtainSpeed);
        this.app.post("/morning/courtain/schedule", MorningController.scheduleCourtain);
        this.app.get("/morning/coffee-machine", MorningController.getAllCoffeeMachines);
        this.app.get("/morning/coffee-machine/:id", MorningController.getCoffeeMachineData);
        this.app.post("/morning/coffee-machine/make", MorningController.makeCoffee);
        this.app.post("/morning/coffee-machine/schedule", MorningController.scheduleMakeCoffee);
        this.app.get("/afternoon/robot", AfternoonController.getAllRobots);
        this.app.get("/afternoon/robot/:id", AfternoonController.getCleaningRobotData);
        this.app.post("/afternoon/robot/start", AfternoonController.startCleaning);
        this.app.post("/afternoon/robot/schedule", AfternoonController.scheduleCleaning);
        this.app.get("/afternoon/air-diffuser", AfternoonController.getAllAirDiffusers);
        this.app.get("/afternoon/air-diffuser/:id", AfternoonController.getAirDiffuserData);
        this.app.post("/afternoon/air-diffuser/start", AfternoonController.startDiffusing);
        this.app.post("/afternoon/air-diffuser/schedule", AfternoonController.scheduleDiffusing);
        this.app.get("/night/mattress", NightController.getAllMattresses);
        this.app.get("/night/mattress/:id", NightController.getMattress);
        this.app.patch("/night/mattress-temperature", NightController.setMattressTemperature);
        this.app.get("/night/speaker", NightController.getAllSpeakers);
        this.app.get("/night/speaker/:id", NightController.getSpeakerData);
        this.app.post("/night/speaker/play", NightController.playSound);
        this.app.post("/night/speaker/stop", NightController.stopSound);

        this.app.use(express.static(path.join(__dirname, '../frontend/build')));
        this.app.get('/', (req, res) => { res.sendFile(path.join(__dirname, '../frontend/build', 'index.html')) })
    }
}



module.exports = Routes