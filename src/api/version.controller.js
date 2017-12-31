import { OK } from '../utils/http'

const packageJson = require('../../package.json')

export default (req, res) => OK(res)(packageJson.version)