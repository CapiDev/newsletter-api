const { ObjectId } = require('mongodb')
const { MongoHelper } = require('../helper/mongo.helper')

module.exports = class NewsletterRepository {
  async create (newsletterInfo) {
    const collection = await MongoHelper.getCollection('newsletter')
    const response = await collection.insertOne({ ...newsletterInfo, date: new Date() })
    return MongoHelper.map(response)
  }

  async list () {
    const collection = await MongoHelper.getCollection('newsletter')
    const response = await collection.find({}).toArray()
    return response.length ? response.map(res => MongoHelper.mapCollection(res)) : []
  }

  async findOne (id) {
    const collection = await MongoHelper.getCollection('newsletter')
    const response = await collection.findOne({ _id: ObjectId(id) })
    return response ? MongoHelper.mapCollection(response) : null
  }
}
