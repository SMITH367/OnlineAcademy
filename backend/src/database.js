const mongose = require("mongoose")

mongose.connect("mongodb+srv://bpuser:smith367@clusterdev.5prwe.mongodb.net/OnlineAcademy?retryWrites=true&w=majority")
    .then((db) => console.log("database connected"))
    .catch((err) => console.log(err))


module.exports = mongose