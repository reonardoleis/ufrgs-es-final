require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Logger = require("./logger/Logger");
const Routes = require("./routes/routes");

function main() {
    const app = express();
    const port = process.env.PORT || 8000;

    app.use(express.json());
    app.use(cors());
    
    let routes = new Routes(app);
    routes.setup();

    app.listen(port, () => {
        Logger.log(`Server listening on port ${port}`)
    });
}

main();