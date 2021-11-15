const MattressRepository = new (require("../repositories/MattressRepository"));

class Speaker {
    constructor(id, name, mattressId, sounds) {
        this.id = id;
        this.name = name;
        this.mattressId = mattressId;
        this.sleepQualitySensor = MattressRepository.find(this.mattressId).sleepQualitySensor;
        this.sounds = sounds;
        this.currentSound = null;
    }

    play() {
        this.computeBestSong();
        setInterval(() => {
            this.computeBestSong();
        }, 100);
    }

    stop() {
        this.currentSound = null;
    }

    computeBestSong() {
        let smallestDiff = Infinity;
        let selected = 0;
        for (let i = 0; i < this.sounds.length; i++) {
            let absDiff = Math.abs(this.sounds[i].fromStressLevel - this.sleepQualitySensor.stressLevel);
            if (absDiff < smallestDiff) {
                smallestDiff = absDiff;
                selected = i;
            }
        }

        this.currentSound = this.sounds[selected];
    }
}

module.exports = Speaker