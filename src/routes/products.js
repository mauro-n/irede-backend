const { Router } = require('express')
const router = Router()

const productController = require('../controllers/products')

router.get('/', productController.index)
router.get('/:id', productController.getOne)

module.exports = router