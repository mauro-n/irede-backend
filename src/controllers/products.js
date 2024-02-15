const ProductModel = require("../models/products");

class ProductController {
    async index(req, res) {
        try {
            const products = await ProductModel.findAll()
            res.status(200).json(products)
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }
}

module.exports = new ProductController()