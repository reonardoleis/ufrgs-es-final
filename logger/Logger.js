class Logger {
    static log(...params) {
        return console.log((new Date()).toLocaleString("pt-BR"), ...params);
    } 
}

module.exports = Logger