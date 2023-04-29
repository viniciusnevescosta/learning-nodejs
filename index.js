const DOT_ENV = require('dotenv')
const DB_CONNECTION = require('./src/db/connect')

DOT_ENV.config()
DB_CONNECTION();

// importar como executável
    // require("./modules/path");
    // require("./modules/fs");
    // require("./modules/http");
    // require("./modules/express")