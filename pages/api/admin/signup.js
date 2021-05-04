const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const db = require("../../../models/index")

export default (req, res)=>{
    console.log("login function started")
    if(req.method == "POST"){
        db().then((a)=>{
            console.log("DB Connected")
        })
        res.status(200).json({"Type" : "Success"})
    }else{
        res.status(200).json({"Type" : "Error" , "Message" : "Please send POST request"})
    }
}
