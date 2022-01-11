const mongose = require("mongoose")


const Schema = mongose.Schema

const course = new Schema({

    name: String,
    instructor: String,
    video: String,
    description: String,
    resourses: String,
    logo: String,
    level: String,
    comentaries: {
        type: Array,
        default: []
    },
    ident: String,
    proyect: String

})
module.exports = mongose.model("courses", course)