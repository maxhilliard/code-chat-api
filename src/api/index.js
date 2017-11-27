import express from 'express'
const router = express.Router()

import version from './version.controller'
import healthcheck from './healthcheck.controller'

router.get('/version', version)

router.get('/health-check', healthcheck)

export default router