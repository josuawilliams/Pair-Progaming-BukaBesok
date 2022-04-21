"use strict";
const { User, Profile, Store, Product} = require("../models")
const convertDate = require("../helpers/convertDate")

class Controller {
    static listAllProduct(req, res) {
        Product.findAll({
            include: Store
        })
        .then(data => {
            res.render("allProduct", {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static buyProduct(req, res) {
        let id = +req.params.id
        Product.findByPk(id)
        .then(data => {
            let stock = data.stock - 1
            return Product.update({stock}, {where: {id: id}})
        })
        .then(_ => {
            res.redirect("/allProduct")
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteProduct(req, res) {
        let id = +req.params.id
        Product.destroy({
            where: {id: id}
        })
        .then(_ => {
            res.redirect("/allProduct")
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller