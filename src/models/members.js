const sequelize = require('../config/database')
const Sequelize = require('sequelize')
var bcrypt = require('bcryptjs')
const UserModel = require('./users')
const RoleModel = require('./roles')

const MemberModel = sequelize.define('members', {
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
        allowNull: false,
        unique: {
            arg: true,
            msg: 'Email já cadastrado!'
        }
    },
    pw: {
        type: Sequelize.DataTypes.VIRTUAL,
    },
    name: {
        type: Sequelize.DataTypes.VIRTUAL,
    },
    pw_hash: {
        type: Sequelize.DataTypes.STRING(255),
    }
}, {
    timestamps: true,
    tableName: 'members',
})

MemberModel.beforeCreate(async (member) => {
    member.pw_hash = await bcrypt.hash(member.pw, 8)
})
MemberModel.afterCreate(async (member) => {
    if (!member.name) return
    await UserModel.create({ member_id: member.id, name: member.name })
})

MemberModel.hasOne(UserModel, {
    foreignKey: 'member_id'
})

MemberModel.belongsTo(RoleModel, {
    foreignKey: 'role_id'
})

MemberModel.prototype.validatePw = function (pwd) {
    return bcrypt.compare(pwd, this.pw_hash)
}

module.exports = MemberModel

