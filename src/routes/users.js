const { Router } = require('express')
const router = Router()

const usersController = require('../controllers/users')
const authenticated = require('../middleware/authenticated')

router.get('/', authenticated, usersController.index)
router.post('/', usersController.store)

module.exports = router