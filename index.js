const express = require('express')
const cors = require('cors')
const productRoutes = require('./src/routes/products.js')
const tokensRoutes = require('./src/routes/tokens.js')
const usersRoutes = require('./src/routes/users.js')
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
    }

    run() {
        this.app.listen(port, () => {
            console.log("Listening on " + port)
        })
    }
}

module.exports = new App().app