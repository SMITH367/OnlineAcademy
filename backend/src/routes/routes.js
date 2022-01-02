const express = require('express')
const router = express.Router()
const user = require("../models/users")
const database = require("../database")


router.get('/user', async (req, res) => {
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
    await user.updateOne({nombre:nameToEdit}, newData)
    res.send("updated")

})

router.delete('/user/:id', async (req, res) => {
    const nameToDel = req.params.id
    await user.deleteOne({ nombre: nameToDel })
    res.send("deleted")
})


module.exports = router