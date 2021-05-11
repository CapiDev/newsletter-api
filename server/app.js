const express = require('express')
const routesConfig = require('./loaders/express/routes')
const middlewaresConfig = require('./loaders/express/set-express-middlewares')
const { config } = require('dotenv')

config()
require('../server/loaders/mongodb/mongo-init')

const app = express()
middlewaresConfig(app)
routesConfig(app)

module.exports = app
