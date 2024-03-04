const jwt = require('jsonwebtoken')
const UserModel = require('../models/users')
const AuthenticationError = require('../exceptions/AuthenticationError')

async function authenticated(req, res, next) {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    const [_, token] = authorization.split(' ')

    try {
        const { id, email } = jwt.verify(token, process.env.TOKEN_SECRET)
        const user = await UserModel.findByPk(id)
        if (!user) throw new AuthenticationError('Unkown user', 401)
        req.user = { id, email }
        console.log(id, email)
        return next()
    } catch (err) {
        return res.status(401).json({ error: "Invalid or expired token" })
    }
}

module.exports = authenticated