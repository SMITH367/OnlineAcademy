const express = require('express')
const router = express.Router()
const route = require("../models/route")
const course = require("../models/course")
const database = require("../database")


//Getting all routes
router.get('/routes', async (req, res) => {
    const routes = await route.find().populate({
        path: 'courses',
        select: 'name logo'
    })
    res.send(routes)
})

//Getting an indiviual route
router.get('/route/:route', async (req, res) => {

    const routes = await route.findOne({
        "ident": `${req.params.route}`
    }).populate({
        path: 'courses',
        select: 'name logo ident'
    })

    res.send(routes)
})
router.post('/route', async (req, res) => {

    const courseInformation = {
        name: req.body.name,
        background: req.body.background,
        url: req.body.url,
        description: req.body.description,
        color: req.body.color,
        logo: req.body.logo,
        courses: req.body.courses,
        ident: req.body.ident,

    }
    const routeD = new route(courseInformation)

    await routeD.save()

    res.send(routeD)
})

module.exports = router