const CategoryModel = require("../models/categories");

class CategoryController {
    async index(req, res) {
        try {
            const data = await CategoryModel.findAll()
            return res.status(200).json(data)
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
    }
}

module.exports = new CategoryController()