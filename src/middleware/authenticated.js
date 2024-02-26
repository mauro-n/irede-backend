const jwt = require('jsonwebtoken')

async function authenticated(req, res, next) {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    const [_, token] = authorization.split(' ')

    try {
        const { id, email } = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = { id, email }
        return next()
    } catch (err) {
        return res.status(401).json({ error: "Invalid or expired token" })
    }
}

module.exports = authenticated