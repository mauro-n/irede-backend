const { Router } = require('express')
const router = Router()

const authController = require('./../controllers/Auth')

router.post('/', authController.login)

module.exports = router