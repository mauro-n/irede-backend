const CategoryModel = require("../models/categories");
const ProductModel = require("../models/products");

class ProductController {
    async index(req, res) {
        try {
            const products = await ProductModel.findAll({
                include: {
                    model: CategoryModel
                }
            })

            res.status(200).json(products)
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                throw new Error('Id missing')
            }
            const product = await ProductModel.findByPk(id)
            return res.json(product)
        } catch (err) {
            return res.status(500).json({ 'error': err })
        }
    }
}

module.exports = new ProductController()