const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config({ path: 'config.env' })

const port = process.env.PORT
const connectDB = require('./database/connection')

connectDB()

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.send('Server running')
})

app.listen(port, () => {
  console.log(`server is running on port https://localhost:${port}`)
})