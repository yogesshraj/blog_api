const knex = require("../model/knex");

module.exports = (req,res)=>{
    const blog_details = {blogName:req.body.blogname, blogDescription:req.body.blogdescription, blogAuthor:req.body.blogauthor};
    const {blogName, blogDescription, blogAuthor} = blog_details;
    knex.select().from("blog_details").where("blogName",blogName).andWhere("blogAuthor",blogAuthor)
    .then(result=>{
        if(result==""){
            knex("blog_details").insert(req.body)
            .then(data=>{
                res.status(201).send("Your Blog has been added")
            })
        }else{
            res.status(403).send("You've already have a blog by name "+blogName+" please use another blog name")
        }
    })
 
}