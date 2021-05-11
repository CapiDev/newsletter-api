
exports.badRequest = (error) => ({
  status: 400,
  body: { error }
})
exports.invalidParam = (error) => ({
  status: 400,
  body: error
})

exports.successResponse = (body) => ({
  status: 200,
  body
})

exports.emptyResponse = () => ({
  status: 204,
  body: 'emptyResponse'
})
