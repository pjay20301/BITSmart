const express = require('express')
const dotenv = require('dotenv')

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
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Server running')
})

app.use('/', require('./routes/router'))

app.listen(port, () => {
  console.log(`server is running on port https://localhost:${port}`)
})