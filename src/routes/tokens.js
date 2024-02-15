const { Router } = require('express')
const router = Router()

const tokenController = require('../controllers/tokens')

router.post('/', tokenController.store)

module.exports = router