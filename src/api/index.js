const router  = require('express').Router()

const version     = require('./version.controller')
const healthcheck = require('./healthcheck.controller')

router.get('/version', version)

router.get('/health-check', healthcheck)

module.exports = router