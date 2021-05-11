const { controller } = require('../controllers-methods/create-controller')
const NewsletterRepository = require('../../../infra/db/mongo/repository/newsletter.repository')
const { makeCreateNewsletterValidation } = require('../validation/create-validate')

exports.createFactory = () => {
  const repository = new NewsletterRepository()
  return controller(makeCreateNewsletterValidation(), repository)
}
