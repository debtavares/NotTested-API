require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (err) => console.error('connection error', err))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())

const index = require('./routes/index')
app.use('/index', index)

const listBrands = require('./routes/brandsRoutes')
app.use('/brands', listBrands)

module.exports = app