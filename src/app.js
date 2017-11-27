global.config = require('./config')

const express = require('express')
const app     = express()

const createHttpServer = require('./libs/server')
const server           = createHttpServer(app)

const setUpExpress = require('./libs/express')
setUpExpress(app)

module.exports = {
    app,
    startServer: () => {
        return new Promise((resolve, reject) => {
            server.listen(config.server.port, () => resolve(app))
        })
    }
}