const axios = require('axios');

class MorningHandler {

  static async getCourtains() {
    const res = await axios.get("http://localhost:3000/morning/courtain");
    return res.data;
  }

  static async getCoffeeMachines() {
    const res = await axios.get("http://localhost:3000/morning/coffee-machine");
    return res.data;
  }

  static async scheduleCourtain(courtain) {
    console.log("scheduling: ",courtain);
    await axios.post("http://localhost:3000/morning/courtain/schedule",courtain);
    const res = await axios.get("http://localhost:3000/morning/courtain/"+courtain.courtainId);
    console.log("response: ",res);
    console.log("response body: ",res.body);
    return res.data;
  }

  static async prepareCoffee(prepare) {
    await axios.post("http://localhost:3000/morning/coffee-machine/make",prepare);
    const res = await axios.get("http://localhost:3000/morning/coffee-machine/"+prepare.coffeeMachineId);
    return res.data;
  }

  static async scheduleCoffee(schedule) {
    await axios.post("http://localhost:3000/morning/coffee-machine/schedule",schedule);
    const res = await axios.get("http://localhost:3000/morning/coffee-machine/"+schedule.coffeeMachineId);
    return res.data;
  }

}

export default MorningHandler;
