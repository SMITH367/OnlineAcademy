const express = require('express')
const router = express.Router()
const course = require("../models/course")
const verifyToken = require('../Auth/verifyToken')
const jwt = require('jsonwebtoken')


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