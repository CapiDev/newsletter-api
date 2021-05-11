const { controller } = require('../controllers-methods/list-controller')
const NewsletterRepository = require('../../../infra/db/mongo/repository/newsletter.repository')

exports.listFactory = () => {
  const repository = new NewsletterRepository()
  return controller(repository)
}
