'use strict'

const loopback = require('loopback')
const boot = require('loopback-boot')
const path = require('path')
const next = require('next')
const dotenv = require('dotenv')

const routes = require('../common/routes')

const app = loopback()

async function _setupNext () {
  const nextInstance = next({
    dev: process.env.NODE_ENV !== 'production',
    dir: path.join(__dirname, '../client')
  })

  await nextInstance.prepare()

  const handle = routes.getRequestHandler(nextInstance)

  app.get('*', (req, res, next) => {
    if (req.url.indexOf('/api') === 0) return next()

    handle(req, res, next)
  })
}

app.boot = async function () {
  // Bootstrap the application, configure models, datasources and middleware.
  // Sub-apps like REST API are mounted via boot scripts.
  boot(app, __dirname)
  await _setupNext()
  // start the web server
  return new Promise(async (resolve, reject) => {
    app.listen(() => {
      const baseUrl = process.env.BASE_URL

      console.log('Web server listening at: %s', baseUrl)

      const apiExplorer = app.get('loopback-component-explorer')
      if (apiExplorer) {
        console.log('Browse your REST API at %s%s', baseUrl, apiExplorer.mountPath)
      }

      resolve(app)
    })
  })
}

if (require.main === module) {
  dotenv.config()
  app.boot()
}
module.exports = app
