const { Router } = require('express')
const router = Router()

const authController = require('../controllers/auth')

router.get('/', authController.whoami)
router.post('/', authController.login)

module.exports = router