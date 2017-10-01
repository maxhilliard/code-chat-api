const startServer = require('./app').startServer

startServer()
    .then(() => console.log(`🍕 Server is listening on port ${config.server.port} 🍕`))
    .catch((err) => { throw new Error(err) })