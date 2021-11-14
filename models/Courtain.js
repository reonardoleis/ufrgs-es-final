class Courtain {
    constructor(id, name, state, speed) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.speed = speed;
    }

    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    setState(newState) {
        this.state = newState;
    }
}

module.exports = Courtain