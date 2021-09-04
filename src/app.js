const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./routes/index')
const brands = require('./routes/brands')

app.use(cors())
app.use(express.json())

app.use('/index', index)
app.use('/brands', brands)

module.exports = app
