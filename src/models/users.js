const sequelize = require('../config/database')
const Sequelize = require('sequelize')

const UserModel = sequelize.define('user', {
    member_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'members',
            key: 'id'
        }
    },
    name: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'users'
})

module.exports = UserModel