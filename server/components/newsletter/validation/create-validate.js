const RequiredFields = require('../../../helpers/validators/required-field.validation')
const RestrictFields = require('../../../helpers/validators/restrict-field.validation')
const ValidationComposite = require('../../../helpers/validators/validation-composite')

exports.makeCreateNewsletterValidation = () => {
  const validations = []

  for (const field of ['newsletter']) {
    validations.push(new RequiredFields(field))
  }

  validations.push(new RestrictFields(['newsletter']))

  return new ValidationComposite(validations)
}
