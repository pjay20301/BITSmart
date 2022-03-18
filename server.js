const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const app = express()

dotenv.config({ path: 'config.env' })

const port = process.env.PORT || 5000
const { connectDB } = require('./database/connection')

connectDB()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('./client/public/index.html'))
    })
}

app.use(
  express.urlencoded({
    extended: true,
  })
)
var cors = require('cors')

app.use(cors())
app.use('/', require('./routes/router'))

app.listen(port, () => {
    console.log(`server is running on port https://localhost:${port}`)
})