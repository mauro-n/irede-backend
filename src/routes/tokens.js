const { Router } = require('express')
const router = Router()

const tokenController = require('../controllers/Tokens')

router.post('/', tokenController.store)

module.exports = router