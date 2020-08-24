const knex = require("../model/knex");
const jwt = require("jsonwebtoken");


module.exports = async(req,res)=>{
    const details = {username: req.body.username, password: req.body.password};
    const {username, password} = details;
    let loginUsername = [];
    let loginPassword = [];
    await knex.select().from("login")
    .then(result=>{
        for(var i of result){
            loginUsername.push(i.username)
            loginPassword.push(i.password)
        }
        if(loginUsername.includes(username) && loginPassword.includes(password)){
            jwt.sign(username,"ragasiyasaavi",(err,token)=>{
                if(username=="yogessh"){
                    console.log("yes")
                    res.status(202).send("Welcome admin your id is =>   "+token)
                }else{
                    res.status(202).send("Login Successfull user "+username+" and your token is =>    "+token)
                }
            })
        }else{
            res.status(422).send("Login Unsuccessful check your username or password")
        }
    })
}