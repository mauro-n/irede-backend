const express = require('express')
const cors = require('cors')
const productRoutes = require('./src/routes/products.js')
const tokensRoutes = require('./src/routes/tokens.js')
const usersRoutes = require('./src/routes/users.js')
const authRoutes = require('./src/routes/auth.js')
const orderRoutes = require('./src/routes/orders.js')
const categoryRoutes = require('./src/routes/categories.js')
const port = 3000

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
        this.run()
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes() {
        this.app.use('/products', productRoutes)
        this.app.use('/tokens', tokensRoutes)
        this.app.use('/users', usersRoutes)
        this.app.use('/auth', authRoutes)
        this.app.use('/orders', orderRoutes)
        this.app.use('/categories', categoryRoutes)
        this.app.use('*', (req, res) => res.status(404).json({ error: 'Not found' }))
    }

    run() {
        this.app.listen(port, () => {
            console.log("Listening on " + port)
        })
    }
}

module.exports = new App().app