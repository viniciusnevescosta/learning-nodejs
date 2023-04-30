const DOT_ENV = require('dotenv')
const DB_CONNECTION = require('./src/db/connect')

const { response } = require("express")

DOT_ENV.config()
DB_CONNECTION();

require("./modules/express")