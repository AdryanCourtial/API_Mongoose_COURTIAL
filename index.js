const { ConnectDatabaseMongo } = require("./database/config/mongodb.config")
const express = require('express')
const bodyParser = require("body-parser")

const app = express()
const port = process.env.EXPRESS_PORT

const router = require("./api/routes")

app.use(bodyParser.json())

app.use("/", router)
  
app.listen(port, async () => {
    await ConnectDatabaseMongo()
    console.log(`Example app listening on port http://localhost:${port}`)
})

module.exports = {
    app
}
