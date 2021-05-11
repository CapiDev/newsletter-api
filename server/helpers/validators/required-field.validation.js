const { MissingParamError } = require('../errors/missing-param')
module.exports = class RequiredFields {
  constructor (fieldName) {
    this.fieldName = fieldName
  }

  validate (input) {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
