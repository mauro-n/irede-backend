const { Router } = require('express')
const router = Router()

const usersController = require('../controllers/users')

router.get('/', usersController.index)
router.post('/', usersController.store)

module.exports = router