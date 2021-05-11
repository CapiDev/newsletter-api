exports.adaptRoute = (controller, method) => {
  return async (req, res) => {
    try {
      const httpRequest = {
        body: req.body,
        params: req.params,
        headers: req.headers,
        query: req.query
      }

      const httpResponse = await controller.handler(httpRequest)
      return res.status(httpResponse.status).json(httpResponse.body)
    } catch (err) {
      console.log(err.message)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }
}
