const mongose = require("mongoose")


const Schema = mongose.Schema

const route = new Schema({
    name: String,
    background: String,
    url: String,
    description: String,
    color: String,
    logo: String,
    courses: {
        type: Array,
        default: []
    }

})
module.exports = mongose.model("routes", route)