const { InvalidParamError } = require('../errors/invalid-param')
module.exports = class RestrictFields {
  constructor (objectValidate) {
    this.objectValidate = objectValidate
  }

  validate (input) {
    const inputKeys = Object.keys(input).sort()
    const difference = inputKeys.filter(inptKey => !this.objectValidate.includes(inptKey))
      .concat(this.objectValidate.filter(inptKey => !inputKeys.includes(inptKey)))

    if (difference.length) {
      return new InvalidParamError(difference.join(','))
    }
  }
}
