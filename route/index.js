const express = require('express')
const route = express.Router()
const register = require('./register')
const store = require('./store')
const product = require('./product')

route.get("/", register)
route.use(register)
route.use(product)
route.use(store)

module.exports = route