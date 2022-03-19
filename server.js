const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const app = express()

dotenv.config({ path: 'config.env' })

const port = process.env.PORT || 5000
const { connectDB } = require('./database/connection')

connectDB()

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use('/', require('./routes/router'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve("./client/build")))
}


var cors = require('cors')

app.use(cors())


app.listen(port, () => {
    console.log(`server is running on port https://localhost:${port}`)
})