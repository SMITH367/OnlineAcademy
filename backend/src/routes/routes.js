const express = require('express')
const router = express.Router()
const user = require("../models/users")
const route = require("../models/route")
const course = require("../models/course")
const jwt = require('jsonwebtoken')
const database = require("../database")


// Veryfing the token for auth
const verifyToken = (req, res, next) => {
    const header = req.headers['authentication']
    if (header != undefined) {
        const token = header
        req.auth = token
        next();
    } else {
        res.sendStatus(403)
    }
}



//Getting all users
router.get('/user', async (req, res) => {
    const viewUser = await user.find()
    res.send(viewUser)
})

//Creating a new user
router.post('/user', async (req, res) => {

    console.log(req.body)
    const viewUser = await user.find({
        email: req.body.email
    })
    if (viewUser.length === 0) {

        const newUser = new user(req.body)
        await newUser.save()
        res.json({
            "added": "true"
        })
    } else {
        res.send({
            "added": "false"
        })
    }
})

router.put('/user/:id', async (req, res) => {
    const nameToEdit = req.params.id
    const newData = req.body
    await user.updateOne({
        nombre: nameToEdit
    }, newData)
    res.send("updated")

})

router.delete('/user/:id', async (req, res) => {
    const nameToDel = req.params.id
    await user.deleteOne({
        nombre: nameToDel
    })
    res.send("deleted")
})

//Login sistem
router.post('/login', async (req, res) => {

    const dataUserLogin = req.body
    const viewUser = await user.find(dataUserLogin)

    if (viewUser.length > 0) {
        const user = {
            id: 1
        }
        jwt.sign({
            user
        }, 'secretKey', (err, token) => {

            if (err) return err

            const dataUser = {
                name: viewUser[0].name,
                email: viewUser[0].email,
                accessToken: token
            }
            res.json(dataUser);

        })
    } else {
        res.sendStatus(403)
    }

})


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

//Getting all courses
router.get('/courses', async (req, res) => {
    const courses = await course.find()
    res.send(courses)
})


module.exports = router