import config from './config'
global.config = config

import express from 'express'
const app = express()

import createHttpServer from './libs/server'
const server = createHttpServer(app)

import setUpExpress from './libs/express'
setUpExpress(app)


export { app }

export const startServer = () => {
    return new Promise((resolve, reject) => {
        server.listen(config.server.port, () => resolve(app))
    })
}