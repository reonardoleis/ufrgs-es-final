const courtainDB = [
    {
        id: 1,
        name: "Cortina da Sala",
        state: "CLOSED",
        speed: 5.5
    },
    {
        id: 2,
        name: "Cortina do Quarto",
        state: "OPENED",
        speed: 3
    }
];

class CourtainRepository {
    constructor() {}

    getAll() {
        return courtainDB;
    }

    find(courtainId) {
        return courtainDB[courtainId - 1];
    }

    setCourtainState(courtainId, courtainState) {
        if (this.find(courtainId)) {
            return courtainDB[courtainId].state = courtainState;
        } else {
            return false;
        }
    }

    setCourtainState(courtainId, courtainSpeed) {
        if (this.find(courtainId)) {
            return courtainDB[courtainId].speed = courtainSpeed;
        } else {
            return false;
        }
    }
}

module.exports = CourtainRepository;