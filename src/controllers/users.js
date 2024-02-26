const MemberModel = require("../models/members");
const RoleModel = require("../models/roles");
const UserModel = require("../models/users");
const Auth = require("../services/Auth");

class UserController {
    async index(req, res) {
        try {
            const users = await UserModel.findAll()
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }

    async store(req, res) {
        const { name, email, pw } = req.body

        if (!name || !email || !pw) {
            return res.status(400).json({
                error: 'Parâmetros faltando: name, email ou pw'
            })
        }

        try {
            const newMember = await MemberModel.create({
                role_id: 1,
                name: name,
                email: email,
                pw: pw,
            })
            
            const role = await RoleModel.findOne({
                where: {
                    id: newMember.role_id
                }
            })

            const token = await Auth.generateToken(newMember.id, newMember.email)

            const response = {
                name: newMember.name,
                role: role.title,
                token: token
            }

            res.status(201).json(response)
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }
}

module.exports = new UserController()