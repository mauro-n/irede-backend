const MemberModel = require("../models/members");
const UserModel = require("../models/users");

class UserController {
    async index(req, res) {
        try {
            const products = await UserModel.findAll()
            res.status(200).json(products)
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }

    async store(req, res) {
        const { email, pw } = req.body

        if (!email || !pw) {
            return res.status(400).json({
                errors: ['Email ou senha inválidos']
            })
        }

        try {
            const newMember = await MemberModel.create({
                role_id: 1,
                email: email,
                pw: pw
            })

            res.status(200).json(newMember)
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }
}

module.exports = new UserController()