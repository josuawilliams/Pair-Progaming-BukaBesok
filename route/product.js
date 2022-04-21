const express = require('express')
const product = express.Router()
const ProductController = require('../controller/ProductController')

product.get("/product", ProductController.listAllProduct)

product.get("/product/buy/:id", ProductController.buyProduct)


product.get("/product/delete/:id", ProductController.deleteProduct)

module.exports = product