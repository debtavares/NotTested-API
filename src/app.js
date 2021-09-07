const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./routes/index')
const brands = require('./routes/brands')
const users = require('./routes/users')

app.use(cors())
app.use(express.json())

app.use('/', index)
app.use('/brands', brands)
app.use('/users', users)

module.exports = app
