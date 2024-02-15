const sequelize = require('../config/database')
const Sequelize = require('sequelize')
var bcrypt = require('bcryptjs')

const MemberModel = sequelize.define('memebrs', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    role_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        }
    },
    email: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
    },
    pw: {
        type: Sequelize.DataTypes.VIRTUAL,
    },
    pw_hash: {
        type: Sequelize.DataTypes.STRING(255),
    }
}, {
    timestamps: true,
    tableName: 'members',
    defaultScope: {
        attributes: {
            exclude: ['pw', 'pw_hash']
        }
    },
    scopes: {
        withPassword: {
            attributes: {},
        }
    }
})

MemberModel.beforeCreate(async (member) => {
    member.pw_hash = await bcrypt.hash(member.pw, 8)
})

module.exports = MemberModel

