const knex = require("../model/knex");

module.exports = (req,res)=>{
    const blogName = req.params.blogname;
    knex("blog_details").del().where("blogName",blogName)
    .then(result=>{
        res.status(200).send("Blog deleted successfully")
    })
}