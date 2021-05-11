const {
  badRequest,
  successResponse
} = require('../../../helpers/http/http-helper')

exports.controller = (validation, createNewslleterRows) => ({
  handler: async (httpParams) => {
    const isNotValid = validation.validate(httpParams.body)

    if (isNotValid) {
      return badRequest(isNotValid.message)
    }

    const createdNewslleter = await createNewslleterRows.create(httpParams.body)
    if (!createdNewslleter) {
      return badRequest('Newslleter not can be saved')
    }

    return successResponse(createdNewslleter)
  }
})
