const MemberModel = require("../models/members")

class TokenController {
    async index(req, res) {
        try {
            res.status(200).json({ message: 'show' })
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }

    async store(req, res) {
        const { email = '', pwd = '' } = req.body

        if (!email || !pwd) {
            return res.status(401).json({
                errors: ['Credenciais inválidas']
            })
        }

        const user = await MemberModel.findOne({
            where: {
                email: email
            }
        })

        if (!user) {
            return res.status(401).json({
                errors: ['Usuário não existente']
            })
        }



        try {
            res.status(200).json({ message: user })
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }
}

module.exports = new TokenController()