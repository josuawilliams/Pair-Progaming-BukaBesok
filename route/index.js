const express = require('express')
const route = express.Router()
const register = require('./register')
const store = require('./store')

route.get("/", register)
route.use(register)

route.use(store)

module.exports = route