const sequelize = require('../config/database')
const Sequelize = require('sequelize')

const RoleModel = sequelize.define('roles', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: Sequelize.DataTypes.STRING(100),
    }
}, {
    timestamps: true,
    tableName: 'roles'
})

module.exports = RoleModel