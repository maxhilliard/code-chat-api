const routes = require('../api')

module.exports = (app) => {
    app.use('/', routes)
}