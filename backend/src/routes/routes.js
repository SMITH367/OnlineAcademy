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
// router.get('/user', async (req, res) => {
//     const viewUser = await user.find()
//     res.send(viewUser)
// })

// Getting user data
router.get('/user/:email', async (req, res) => {
    const viewUser = await user.find({
        email: req.params.email
    }, {
        "password": 0,
        "_id": 0
    })
    res.send(viewUser)
})


//Creating a new user
router.post('/user', async (req, res) => {

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

// Updating an username

router.put('/username/:id', verifyToken, (req, res) => {

    jwt.verify(req.auth, 'secretKey', async (err, data) => {
        if (err) {
            res.send("err");
        } else {
            const newData = {
                name: req.body.name
            }
            const updateUser = await user.updateOne({
                email: req.params.id
            }, newData)
            res.send(updateUser.acknowledged)
        }
    })
})

// updating the password

router.put('/userpassword/:id', verifyToken, (req, res) => {
    jwt.verify(req.auth, 'secretKey', async (err, data) => {
        if (err) {
            res.send("err");
        } else {
            const newData = {
                password: req.body.password
            }
            const updateUser = await user.updateOne({
                email: req.params.id
            }, newData)
            res.send(updateUser.acknowledged)
        }
    })
})

//Delete account

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
    const courses = await course.find({}, {
        "description": 0,
        "instructor": 0,
        "video": 0,
        "resourses": 0,
        "level": 0,
        "comentaries": 0,
        "proyect-description": 0,
    })
    res.send(courses)
})

//Searching a course
router.get('/courses/:course', async (req, res) => {

    const nameToS = req.params.course
    const courses = await course.find({
        "name": {
            $regex: '.*' + nameToS + '.*'
        }
    }, {
        "description": 0,
        "instructor": 0,
        "video": 0,
        "resourses": 0,
        "level": 0,
        "comentaries": 0,
        "proyect-description": 0,
    })
    res.send(courses)
})

//Getting description data about the course
router.get('/course/:course', async (req, res) => {
    const courses = await course.find({
        ident: req.params.course
    }, {
        "comentaries": 0,
        "proyect-description": 0,
        "video": 0
    })
    res.send(courses)
})

//Getting all data of the course
router.get('/view/:course', async (req, res) => {
    const courses = await course.find({
        ident: req.params.course
    })
    res.send(courses)
})

// Creating a new comment about a course
router.post('/comments/:course', verifyToken, (req, res) => {
    jwt.verify(req.auth, 'secretKey', async (err, data) => {
        if (err) {
            res.send("err");
        } else {
            const sendComment = await course.updateOne({
                ident: req.params.course
            }, {
                $push: {
                    comments: {
                        name: req.body.name,
                        comment: req.body.comment,
                        email: req.body.email
                    }
                }
            })
            res.send(sendComment.acknowledged)
        }
    })
})

//Deleting a comment
router.delete('/comments/:ident', verifyToken, (req, res) => {

    jwt.verify(req.auth, 'secretKey', async (err, data) => {
        if (err) {
            res.send("err");
        } else {
            const deleteComment = await course.updateOne({
                ident: req.params.ident,
            }, {
                $pull: {
                    comments: {
                        email: req.body.email,
                        comment: req.body.comment
                    }
                }
            })
            res.send(deleteComment.acknowledged)

        }
    })
})

module.exports = router