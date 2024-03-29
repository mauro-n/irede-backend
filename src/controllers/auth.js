const authService = require("../services/Auth")
const MemberModel = require("../models/members")
const AuthenticationError = require("../exceptions/AuthenticationError")

class AuthController {
    async login(req, res) {
        const { email, pw } = req.body

        if (!email || !pw) {
            return res.status(401).json({ error: 'Credenciais inválidas' })
        }
        try {
            const userData = await authService.authenticateWithEmailPw(email, pw)
            return res.json(userData)
        } catch (err) {
            console.log('ERRO---------------------')
            console.log(err)
            if (err instanceof AuthenticationError) {
                return res.status(err.status).json({ error: err.message })
            }
            return res.status(500).json({ error: err.message })
        }
    }
}

module.exports = new AuthController()