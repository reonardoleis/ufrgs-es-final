require("dotenv").config();
const express = require("express");
const Logger = require("./logger/Logger");
const router = require("./routes/routes");

function main() {
    const app = express();
    const port = process.env.PORT || 8000;

    app.use(express.json())
    app.use(router);

    app.listen(port, () => {
        Logger.log(`Server listening on port ${port}`)
    });
}

main();