const { adaptRoute } = require('../core/adapters/express-route-adapter')
const { createFactory } = require('../components/newsletter/factory/create-factory')
const { listFactory } = require('../components/newsletter/factory/list-factory')
const { readFactory } = require('../components/newsletter/factory/read-factory')

module.exports = (route) => {
  route.post('/newsletter', adaptRoute(createFactory()))
  route.get('/newsletter', adaptRoute(listFactory()))
  route.get('/newsletter/:id', adaptRoute(readFactory()))
}
