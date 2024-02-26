const sequelize = require('../config/database')
const Sequelize = require('sequelize')

const CategoryModel = sequelize.define('category', {
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
    img: {
        type: Sequelize.DataTypes.STRING
    }
}, {
    timestamps: true,
    tableName: 'categories'
})

module.exports = CategoryModel