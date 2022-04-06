const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const cloudinary = require('cloudinary')
const app = express()

dotenv.config({ path: 'config.env' })

const port = process.env.PORT || 5000
const { connectDB } = require('./database/connection')

connectDB()
var cors = require('cors')

app.use(cors())

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use('/', require('./routes/router'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve("./client/build")))
}





app.listen(port, () => {
    console.log(`server is running on port https://localhost:${port}`)
})