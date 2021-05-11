module.exports = (route) => {
  route.get('/checkstatus', (req, res) => {
    res.status(200).json({ status: 'alive' })
  })
}
