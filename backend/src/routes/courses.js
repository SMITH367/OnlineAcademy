const express = require('express')
const router = express.Router()
const course = require("../models/course")

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
module.exports = router