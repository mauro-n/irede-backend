const sequelize = require('../config/database')
const Sequelize = require('sequelize')
const UserModel = require('./users')
const SaleItemsModel = require('./saleItems')

const OrderModel = sequelize.define('orders', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id_user: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'member_id'
        }
    },
    status: {
        type: Sequelize.DataTypes.STRING
    },
    items: {
        type: Sequelize.DataTypes.VIRTUAL
    }
}, {
    timestamps: true,
    tableName: 'sales'
})

UserModel.hasMany(OrderModel, {
    foreignKey: 'id_user'
})

OrderModel.hasMany(SaleItemsModel, {
    foreignKey: 'id_sale',
})



module.exports = OrderModel