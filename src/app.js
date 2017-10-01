global.config = require('./config')

const express = require('express')
const app     = express()
const http    = require('http')

const setUpExpress = require('./libs/express')
setUpExpress(app)

module.exports = () => {
    return new Promise((resolve, reject) => {
        http.createServer(app)
            .listen(config.server.port, () => resolve(app))
    })
}

module.exports = {
    app,
    startServer: () => {
        return new Promise((resolve, reject) => {
            http.createServer(app)
                .listen(config.server.port, () => resolve(app))
        })
    }
}