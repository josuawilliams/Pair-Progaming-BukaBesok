"use strict";
const { User, Profile, Store, Product} = require("../models")
const convertDate = require("../helpers/convertDate")

class Controller {
    static listStore(req, res) {
        const msg = req.query.msg
        let store;
        Store.findAll()
        .then(data => {
            store = data
            return Profile.findAll()
        })
        .then(data1=>{
            res.render("listStore", {store ,convertDate, data1, msg})
        })
        .catch(err => {
            res.send(err)
        })
    }
    
    static listProductAtStore(req, res) {
        const id = +req.params.id
        Product.findAll({
            include: Store,
            where: {
             StoreId: id
          } 
        })
        .then(data => {
            const store = data[0].Store
            res.render("productByStore", {data, store})
        })
        .catch(err => {
            res.send(err)
        })
    }
}
module.exports = Controller