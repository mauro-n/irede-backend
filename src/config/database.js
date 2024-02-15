const { Sequelize } = require('sequelize')
const databaseConfig = require('../../config/config.js')

const sequelize = new Sequelize(databaseConfig.development)

const testConn = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

//testConn()

module.exports = sequelize