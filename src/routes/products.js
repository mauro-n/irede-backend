const { Router } = require('express')
const router = Router()

const productController = require('../controllers/Products')

router.get('/', productController.index)
router.get('/:id', productController.getOne)

module.exports = router