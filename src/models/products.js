const sequelize = require('../config/database')
const Sequelize = require('sequelize')
const CategoryModel = require('./categories')

const ProductModel = sequelize.define('product', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
    },
    qtd_stock: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    base_price: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0
    },
    img: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    }
})

ProductModel.belongsToMany(CategoryModel, {
    through: 'category_product',
    foreignKey: 'product_id',
    otherKey: 'category_id'
})

module.exports = ProductModel