const admin = require("../../../models/admin")
const db = require("../../../models/index")
const post = require("../../../models/post")

export default (req , res)=>{
    if(req.method == "POST"){
        //console.log(req)
        db().then(()=>{console.log("DB Connected")})
        const token = req.headers.authorization.replace("Bearer " , "")
        admin.findOne({token : token}).then((user)=>{
            //real shit happens here
            console.log("User ::" , user.username)
            const userPost = new post({username : user.username , text : req.body.post})
            userPost.save().then((a)=>{
                res.status(200).json({"Type" : "Success" , "Message" : "Posted"})
            }).catch((e)=>{
                res.status(401).json({"Type" : "Error" , "Message" : e})
            })
        }).catch((e)=>{
            res.status(401).json({"Type" : "Error" , "Message" : e})
        })
        //res.status(200).json({"Type" : "Test"})
    }else{
        res.status(401).json({"Type" : "Error" , "Message" : "Please POST"})
    }
}
