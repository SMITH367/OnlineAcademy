const mongose = require("mongoose")


const Schema = mongose.Schema

const route = new Schema({
    name: String,
    background: String,
    url: String,
    description: String,
    color: String,
    logo: String,
    courses: [{ type: Schema.Types.ObjectId, ref: 'courses' }],
    ident: String,

})
module.exports = mongose.model("routes", route)