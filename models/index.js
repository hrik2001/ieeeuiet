const mongoose = require("mongoose")

mongo_connect = async() =>{
    await mongoose.connect(process.env.mongodburl,  {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = mongo_connect
