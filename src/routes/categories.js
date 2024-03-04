const { Router } = require('express')
const router = Router()
const categoryController = require('../controllers/Categories')

router.get('/', categoryController.index)

module.exports = router