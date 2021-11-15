const Courtain = require(".././models/Courtain");
const CustomException = require("../exceptions/CustomException");


const courtainDB = [
    new Courtain(1, "Cortina da Sala", "OPENED", "SLOW"),
    new Courtain(2, "Cortina do Quarto", "CLOSED", "FAST")
];

class CourtainRepository {
    constructor() { }

    getAll() {
        return courtainDB.map(item => item.cloneWithoutCircularReferences());
    }

    find(courtainId) {
        let courtain = courtainDB[courtainId - 1];
        if (!courtain) {
            throw new CustomException("courtain not found", 404);
        }

        return courtain;
    }
}

module.exports = CourtainRepository;