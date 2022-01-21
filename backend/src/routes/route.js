const express = require('express')
const router = express.Router()
const route = require("../models/route")
const jwt = require('jsonwebtoken')
const database = require("../database")


//Getting all routes
router.get('/routes', async (req, res) => {
    const routes = await route.find()
    res.send(routes)
})

//Getting an indiviual route
router.get('/route/:route', async (req, res) => {
    const routes = await route.findOne({
        "ident": `${req.params.route}`
    })
    res.send(routes)
})


module.exports = router