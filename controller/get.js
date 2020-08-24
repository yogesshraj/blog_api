const knex = require("../model/knex");

exports.getall  = (req,res)=>{
    knex.select().from("blog_details")
    .then(result=>{
        console.log(req.headers.authorization)
        res.status(200).send(result)
    })
}

exports.getAuthor = (req,res)=>{
    knex.select().from("blog_details").where("blogAuthor",req.params.author)
    .then(result=>{
        console.log("yes")
        res.status(200).send(result)
    })
}