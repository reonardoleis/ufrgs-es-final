class RandomUtils {
    static randomBetween(lower, upper) {
        return Math.random() * (upper - lower + 1) + lower;
    }

    static randomSignal() {
        return Math.random() < 0.5 ? -1 : 1;
    }
}

module.exports = RandomUtils;