const knex = require("../model/knex");

module.exports = (req,res)=>{
    const blog_details = {blogName:req.body.blogname, blogDescription: req.body.blogdescription, blogAuthor: req.body.blogauthor};
    const {blogName, blogDescription, blogAuthor}  = blog_details;
    knex("blog_details").update("blogDescription",blogDescription).where("blogName",blogName).andWhere("blogAuthor",blogAuthor)
    .then(result=>{
        res.status(200).send("Blog updated successfully")
    })
}