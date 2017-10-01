const { OK }      = require('../utils/http')
const packageJson = require('../../package.json')

module.exports = (req, res) => OK(res)(packageJson.version)