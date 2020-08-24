const knex = require("../model/knex");

module.exports = (req,res)=>{
    const details = {username:req.body.username, password:req.body.password};
    const {username, password} = details;
    knex.select().from("login").where("username",username)
    .then(result=>{
        if(result==""){
            knex("login").insert(req.body)
            .then(result=>{
                res.status(201).send("Your account with name: "+username+" created successfully")
            })
        }else{
            res.status(422).send("Your account with name: "+username+" is already being registered")
        }
    })
}