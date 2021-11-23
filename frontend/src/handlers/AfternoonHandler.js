const axios = require('axios');

class AfternoonHandler {

  static async getRobots() {
    const res = await axios.get("http://localhost:3000/afternoon/robot");
    return res.data;
  }

  static async startCleaning(robot) {
    await axios.post("http://localhost:3000/afternoon/robot/start",robot);
    const res = await axios.get("http://localhost:3000/afternoon/robot/"+robot.robotId);
    return res.data;
  }

  static async scheduleCleaning(robot) {
    await axios.post("http://localhost:3000/afternoon/robot/schedule",robot);
    const res = await axios.get("http://localhost:3000/afternoon/robot/"+robot.robotId);
    return res.data;
  }

  static async getAirDiffusers() {
    const res = await axios.get("http://localhost:3000/afternoon/air-diffuser");
    return res.data;
  }

  static async startDiffusing(essence) {
    await axios.post("http://localhost:3000/afternoon/air-diffuser/start",essence);
    const res = await axios.get("http://localhost:3000/afternoon/air-diffuser/"+essence.airDiffuserId);
    return res.data;
  }

  static async scheduleDiffusing(essence) {
    await axios.post("http://localhost:3000/afternoon/air-diffuser/schedule",essence);
    const res = await axios.get("http://localhost:3000/afternoon/air-diffuser/"+essence.airDiffuserId);
    return res.data;
  }

}

export default AfternoonHandler;
