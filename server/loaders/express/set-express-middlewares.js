const expressJson = require('../../middlewares/express/express-json')
const contentType = require('../../middlewares/express/content-type')
const cors = require('../../middlewares/express/cors')

module.exports = (app) => {
  app.use(contentType)
  app.use(cors)
  app.use(expressJson)
}
