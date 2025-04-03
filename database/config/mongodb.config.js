const mongoose = require('mongoose')
require('dotenv').config()

const ConnectDatabaseMongo = async () => {
    const env = process.env
    try {

        await mongoose.connect(`mongodb://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@${env.MONGO_URL}:${env.MONGO_PORT}`);

        console.log("Database is Successfully Connected")

    } catch (err) {
        throw new Error(err)
    }
}
module.exports = {
    ConnectDatabaseMongo
}