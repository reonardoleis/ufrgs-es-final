const AirDiffuser =  require(".././models/AirDiffuser");
const Essence = require(".././models/Essence");
const CustomException = require("../exceptions/CustomException");

const airDiffuserDB = [
    new AirDiffuser(1, "Difusor da Sala", [new Essence(1, "Essência de Limão"), new Essence(2, "Essência de Laranja"), new Essence(3, "Essência de Capim Limão"), new Essence(4, "Essência de Baunilha")]),
    new AirDiffuser(2, "Difusor do Quarto", [new Essence(1, "Essência de Limão"), new Essence(2, "Essência de Eucalipto")]),
    new AirDiffuser(3, "Difusor da Suíte", [new Essence(1, "Essência de Laranja"), new Essence(2, "Essência de Eucalipto"), new Essence(3, "Essência de Capim Limão")])
]

class AirDiffuserRepository {
    constructor() { }

    getAll() {
        return airDiffuserDB.map(item => item.cloneWithoutCircularReferences());
    }

    find(airDiffuserId) {
        if (!airDiffuserDB[airDiffuserId - 1]) {
            throw new CustomException("air diffuser not found", 404);
        }

        return airDiffuserDB[airDiffuserId - 1];
    }
}

module.exports = AirDiffuserRepository