const {
  badRequest,
  successResponse
} = require('../../../helpers/http/http-helper')

exports.controller = (validation, findNewslleter) => ({
  handler: async (httpParams) => {
    const isNotValid = validation.validate(httpParams.params)

    if (isNotValid) {
      return badRequest(isNotValid.message)
    }

    const newslleter = await findNewslleter.findOne(httpParams.params.id)
    if (!newslleter) {
      return badRequest('Newslleter not found')
    }

    return successResponse(newslleter)
  }
})
