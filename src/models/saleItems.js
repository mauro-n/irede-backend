const sequelize = require('../config/database')
const Sequelize = require('sequelize')
const ProductModel = require('./products')

const SaleItemsModel = sequelize.define('sale_items', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id_sale: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'sales',
            key: 'id'
        }
    },
    id_product: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    product_qtd: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    product_curr_price: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
}, {
    timestamps: true,
    tableName: 'sale_items'
})

SaleItemsModel.belongsTo(ProductModel, {
    foreignKey: 'id_product'
})

module.exports = SaleItemsModel