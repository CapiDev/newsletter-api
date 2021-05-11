const { MongoHelper } = require('../../infra/db/mongo/helper/mongo.helper')

module.exports = MongoHelper.connect(process.env.mongoDb).then(async () => {
  console.log('Mongo has been conected')
})
