const ProductModel = require("../models/products");
const ProductService = require("../services/ProductService");

class ProductController {
    async index(req, res) {
        const { categoryId } = req.query
        try {
            let data
            if (!categoryId || categoryId === 'all' || categoryId === '1') {
                data = await ProductService.index()
                return res.status(200).json(data)
            } else {
                data = await ProductService.getByCategory(categoryId)
                return res.status(200).json(data)
            }
        } catch (err) {
            console.log(err)
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