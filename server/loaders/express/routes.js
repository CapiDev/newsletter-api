const { readdirSync } = require('fs')
const { Router } = require('express')
const { pathToFileURL } = require('url')

module.exports = (app) => {
  const router = Router()

  app.use('/api', router)
  readdirSync(`${__dirname}/../../routes`).map(async file => {
    if (file.endsWith('.routes.js')) {
      (await import(pathToFileURL(`${__dirname}/../../routes/${file}`))).default(router)
    }
  })
}
