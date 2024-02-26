const jwt = require('jsonwebtoken')
const AuthenticationError = require('../exceptions/AuthenticationError')
const UserModel = require('../models/users')
const MemberModel = require('../models/members')
const RoleModel = require('../models/roles')

class Auth {
    async generateToken(id, email) {
        const token = jwt.sign(
            { id: id, email: email },
            process.env.TOKEN_SECRET,
            { expiresIn: process.env.TOKEN_EXP }
        )

        return token
    }

    async authenticateWithEmailPw(email, pw) {
        const member = await MemberModel.findOne({
            where: {
                email: email
            },
            include: [{
                model: UserModel,
                as: 'user'
            }, {
                model: RoleModel,
                as: 'role'
            }]
        })

        if (!member) {
            throw new AuthenticationError("Usuário não encontrado", 401)
        }

        const isPwValid = await member.validatePw(pw)

        if (!isPwValid) {
            throw new AuthenticationError("Credenciais inválidas", 401)
        }

        const token = await this.generateToken(member.id, member.email)

        const result = {
            id: member.id,
            role: member.role.title,
            token: token,
            name: member.user.name
        }

        return result
    }

}

module.exports = new Auth()