const axios = require('axios');

class NightHandler {

  static async getMatresses() {
    const res = await axios.get("http://localhost:3000/night/mattress");
    return res.data;
  }

  static async setTemperature(mattress) {
    await axios.patch("http://localhost:3000/night/mattress-temperature",mattress);
    const res = await axios.get("http://localhost:3000/night/mattress/"+mattress.mattressId);
    return res.data;
  }

  static async getSpeakers() {
    const res = await axios.get("http://localhost:3000/night/speaker");
    return res.data;
  }

  static async playSpeaker(speaker) {
    await axios.post("http://localhost:3000/night/speaker/play",speaker);
    const res = await axios.get("http://localhost:3000/night/speaker/"+speaker.speakerId);
    return res.data;
  }

  static async stopSpeaker(speaker) {
    await axios.post("http://localhost:3000/night/speaker/stop",speaker);
    const res = await axios.get("http://localhost:3000/night/speaker/"+speaker.speakerId);
    return res.data;
  }

}

export default NightHandler;
