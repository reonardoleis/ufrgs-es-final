const RandomUtils = require("../utils/RandomUtils");

class HumiditySensor {
    constructor(level) {
        this.level = level;
        setInterval(() => {
            let newDiff = RandomUtils.randomBetween(0, 1) * RandomUtils.randomSignal();
            this.level = this.level + newDiff;
            // 0% to 100%...
            this.level = Math.max(this.level, 0);
            this.level = Math.min(this.level, 100);
        }, 1000)
    }
}

module.exports = HumiditySensor