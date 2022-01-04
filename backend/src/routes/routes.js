const express = require('express')
const router = express.Router()
const user = require("../models/users")
const jwt = require('jsonwebtoken')
const database = require("../database")


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

const verifyLogin = async (req, res, next) => {

    const dataUserLogin = req.body
    const viewUser = await user.find(dataUserLogin)

    if (viewUser.length > 0) {
        next()
    } else {
        res.sendStatus(403)
    }

}


router.get('/user', verifyToken, async (req, res) => {
    const viewUser = await user.find()
    res.send(viewUser)
})

router.post('/user', async (req, res) => {
    const newUser = new user(req.body)
    await newUser.save()
    res.send("added")
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

router.post('/login', verifyLogin, (req, res) => {



    const user = {
        id: 1
    }
    jwt.sign({
        user
    }, 'secretKey', (err, token) => {

        if (err) return err

        const dataUser = {
            name: req.body.name,
            email: req.body.email,
            accessToken: token
        }
        res.json(dataUser);

    })
})

module.exports = router