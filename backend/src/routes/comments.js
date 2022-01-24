const express = require('express')
const router = express.Router()
const course = require("../models/course")
const verifyToken = require('../Auth/verifyToken')
const jwt = require('jsonwebtoken')




//Gettting all comments
router.get('/comments/all', async (req, res) => {


    const courses = await course.find({}, {
        "description": 0,
        "instructor": 0,
        "video": 0,
        "resourses": 0,
        "level": 0,
        "proyectDescription": 0,
        "logo": 0,
        "ident": 0,
        "_id": 0,
        "url_course": 0

    })
    courses.sort(() => Math.random() - 0.5);

    courses.map((el) => {
        el.comments.sort(() => Math.random() - 0.7)
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