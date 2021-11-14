const Courtain = require(".././models/Courtain");

const STATES = {
    "OPENED": "OPENED",
    "CLOSED": "CLOSED"
}


const courtainDB = [
    new Courtain(1, "Cortina da Sala", STATES.CLOSED, 5.5),
    new Courtain(2, "Cortina do Quarto", STATES.OPENED, 3)
];

class CourtainRepository {
    constructor() { }

    getAll() {
        return courtainDB;
    }

    find(courtainId) {
        return courtainDB[courtainId - 1];
    }

    setCourtainState(courtainId, courtainState) {
        let courtain = this.find(courtainId);
        if (courtain) {
            if (!STATES[courtainState]) {
                return true;
            }
            courtain.setState(courtainState);
            return true
        }
        return false;
    }

    setCourtainSpeed(courtainId, courtainSpeed) {
        let courtain = this.find(courtainId);
        if (courtain) {
            courtain.setSpeed(courtainSpeed);
            return true
        }
        return false;
    }
}

module.exports = CourtainRepository;