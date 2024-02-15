const { Router } = require('express')
const router = Router()

const productController = require('../controllers/products')

router.get('/', productController.index)

module.exports = router