const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true
    },
    text : {
        type: String,
        required: true,
        trim : true
    },
}, {timestamps : true})

module.exports = mongoose.model("post" , postSchema)
