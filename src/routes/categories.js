const { Router } = require('express')
const router = Router()
const categoryController = require('../controllers/categories')

router.get('/', categoryController.index)

module.exports = router