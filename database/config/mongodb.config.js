const mongoose = require('mongoose')
require('dotenv').config()
const process = require('process')

const ConnectDatabaseMongo = async () => {
    const env = process.env
    try {

        console.log(process.en)

        await mongoose.connect(process.env.MONGO_URI);

        console.log("Database is Successfully Connected")

    } catch (err) {
        throw new Error(err)
    }
}
module.exports = {
    ConnectDatabaseMongo
}