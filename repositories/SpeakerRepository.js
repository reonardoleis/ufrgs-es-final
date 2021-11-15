const Speaker = require(".././models/Speaker");
const Sound = require(".././models/Sound");
const SleepQualitySensor = require(".././models/SleepQualitySensor");
const CustomException = require("../exceptions/CustomException");

const speakerDB = [
    new Speaker(1, "Speaker do Quarto", 1, [new Sound(25, "Som de chuva - leve"), new Sound(50, "Som de pássaros - médio"), new Sound(75, "Som de ondas relaxantes - alto")]),
    new Speaker(2, "Speaker da Sala", 2, [new Sound(20, "Som de animais - leve"), new Sound(60, "Som de praia - médio"), new Sound(80, "Som de floresta - alto")])
]

class SpeakerRepository {
    constructor() {}

    getAll() {
        return speakerDB;
    }

    find(speakerId) {
        let speaker = speakerDB[speakerId - 1];
        if (!speaker) {
            throw new CustomException("speaker not found", 404);
        }

        return speaker;
    }
}

module.exports = SpeakerRepository