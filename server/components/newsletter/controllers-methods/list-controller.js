const {
  badRequest,
  successResponse
} = require('../../../helpers/http/http-helper')

exports.controller = (listNewslleterRows) => ({
  handler: async () => {
    const newslleter = await listNewslleterRows.list()
    if (!newslleter.length) {
      return badRequest('Newslleter not found')
    }

    return successResponse(newslleter)
  }
})
