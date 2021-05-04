const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const db = require("../../../models/index")
const admin = require("../../../models/admin")

export default (req, res)=>{
    console.log("login function started")
    if(req.method == "POST"){
        db().then((a)=>{
            console.log("DB Connected")
        })
        const token = jwt.sign({username : req.body.username} , "hello" , {algorithm: "HS256", expiresIn: "24h"})
        admin.findOne({username : req.body.username}).then((a)=>{
            a.token = token
            bcrypt.compare(req.body.password, a.password).then((verify)=>{
                if(verify){
                    a.save().then(console.log)
                    res.status(200).json({"Type" : "Success" , "data" : token})
                
                }else{
                    res.status(401).json({"Type" : "Error" , "Message" : "Put right password"})
                }
            }
            )
            ////a.save().then(console.log)
            ////res.status(200).json({"Type" : "Success", "data" : token})
        }).catch((e)=>{
            res.status(401).json({"Type" : "Error"})
            
        })
        //currentUser.token = token
        //await currentUser.save()
    }else{
        res.status(401).json({"Type" : "Error" , "Message" : "Please send POST request"})
    }
}
