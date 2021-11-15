require("dotenv").config();
const express = require("express");
const Logger = require("./logger/Logger");
const Routes = require("./routes/routes");

function main() {
    const app = express();
    const port = process.env.PORT || 8000;

    app.use(express.json())
    
    let routes = new Routes(app);
    routes.setup();

    app.listen(port, () => {
        Logger.log(`Server listening on port ${port}`)
    });
}

main();