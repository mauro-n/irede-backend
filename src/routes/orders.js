const { Router } = require('express')
const router = Router()
const orderController = require('../controllers/Orders')
const authenticated = require('../middleware/authenticated')

router.get('/', authenticated, orderController.index)
router.get('/:id', authenticated, orderController.getOne)
router.post('/', authenticated, orderController.store)

module.exports = router