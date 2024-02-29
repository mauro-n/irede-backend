const CategoryModel = require("../models/categories")
const ProductModel = require("../models/products")

class ProductService {
    async index() {
        const products = await ProductModel.findAll({
            include: {
                model: CategoryModel
            }
        })
        return products
    }

    async getByCategory(category) {
        const products = await ProductModel.findAll({
            include: {
                model: CategoryModel,
                where: {
                    id: category
                }
            },
        })
        return products
    }
}

module.exports = new ProductService()