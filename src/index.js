import { startServer } from './app'

startServer()
    .then(() => console.log(`🍕 Server is listening on port ${config.server.port} 🍕`))
    .catch((err) => { throw new Error(err) })