const { controller } = require('../controllers-methods/read-controller')
const NewsletterRepository = require('../../../infra/db/mongo/repository/newsletter.repository')
const { makeReadNewsletterValidation } = require('../validation/read-validate')

exports.readFactory = () => {
  const repository = new NewsletterRepository()
  return controller(makeReadNewsletterValidation(), repository)
}
