const jwt = require("jsonwebtoken");

module.exports = function middlware(req,res,next){
    var authentication =  jwt.verify(req.headers.authorization,"ragasiyasaavi");
    if(authentication=="yogessh"){
        console.log(authentication)
        next();
    }else{
        console.log("yes")
        res.status(403).send("Access Denied")
    }
}