const OrderModel = require("../models/orders");
const app_vars = require('../config/enum');
const SaleItemsModel = require("../models/saleItems");
const sequelize = require("../config/database");
const ProductModel = require("../models/products");

class OrderController {
    async index(req, res) {
        try {
            const { user } = req
            const orders = await OrderModel.findAll({
                where: {
                    id_user: user.id
                },
                include: {
                    model: SaleItemsModel,
                    include: ProductModel
                },
                order: [
                    ['created_at', 'DESC']
                ]
            })
            return res.status(200).json(orders)
        } catch (err) {
            return res.status(500).json({ error: err })
        }

    }

    async getOne(req, res) {
        const { id } = req.params

        return res.status(203).end()
    }

    async store(req, res) {
        const { items } = req.body

        if (!items || !Array.isArray(items)) {
            return res.status(400).json({ error: 'Sem itens no carrinho' })
        }

        try {
            await sequelize.transaction(async (t) => {
                const order = await OrderModel.create({
                    id_user: req.user.id,
                    status: app_vars.orderStatus.pendingPayment,
                }, {
                    transaction: t
                })


                const itemsF = items.map((item) => {
                    return {
                        id_product: item.id,
                        id_sale: order.id,
                        product_qtd: item.qtd,
                        product_curr_price: item.currPrice
                    }
                })

                await SaleItemsModel.bulkCreate(itemsF, {
                    transaction: t
                })
            })

            return res.status(201).end()
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
    }
}

module.exports = new OrderController()