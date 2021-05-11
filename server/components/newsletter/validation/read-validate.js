const RequiredFields = require('../../../helpers/validators/required-field.validation')
const RestrictFields = require('../../../helpers/validators/restrict-field.validation')
const ValidationComposite = require('../../../helpers/validators/validation-composite')

exports.makeReadNewsletterValidation = () => {
  const validations = []

  for (const field of ['id']) {
    validations.push(new RequiredFields(field))
  }

  validations.push(new RestrictFields(['id']))

  return new ValidationComposite(validations)
}
