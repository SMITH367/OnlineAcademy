const express = require('express')
const router = express.Router()
const route = require("../models/route")
const course = require("../models/course")
const database = require("../database")


//Getting all routes
router.get('/routes', async (req, res) => {
    const routes = await route.find().populate({path: 'courses', select: 'name logo'})
    res.send(routes)
})

//Getting an indiviual route
router.get('/route/:route', async (req, res) => {
    const routes = await route.findOne({
        "ident": `${req.params.route}`
    })
    res.send(routes)
})
router.post('/route', async (req, res) => {
    coursesData = [{_id:'61ddb4d39efe76143a9efe34'}, {_id:'61ddba44090b4e8a139f7a8c'}, {_id:'61ddbbb9c159659ab31aa095'}]
    const routeD = new route({
        name: "Ruta de prueba",
        url: "/route/devTools",
        logo: "https://static.platzi.com/media/achievements/1301-97adc02b-c21c-46fc-b753-c50bf1a98f67.png",
        color: "rgb(0, 182, 15)",
        description: "Aprende las herramientas que necesitas en el desarrollo software, desde basico hasta avanzado y domina las devtools.",
        courses: coursesData
    })

    await routeD.save()

    res.send(routeD)
})

module.exports = router