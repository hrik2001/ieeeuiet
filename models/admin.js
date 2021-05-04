const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const adminSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true
    },
    password : {
        type: String,
        required: true,
        trim : true
    },
    token : String
}, {timestamps : true})

adminSchema.pre('save' , async function(next){
    const currentAdmin = this
    if(currentAdmin.isModified('password')){
        currentAdmin.password = await bcrypt.hash(currentAdmin.password, 10)

    }
    next()
})
module.exports = mongoose.model("admin" , adminSchema)
