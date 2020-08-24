const knex = require("knex")({
    client:"mysql",
    connection :{
        host:"localhost",
        user:"root",
        password:"navgurukul",
        database:"blog_app"
    }
});


knex.schema
.hasTable("login")
.then(exists=>{
    if(!exists){
        return knex.schema.createTable("login",(table)=>{
            table.increments("id").primary();
            table.string("username");
            table.string("password");
        })
    }
})

knex.schema
.hasTable("blog_details")
.then(exists=>{
    if(!exists){
        return knex.schema.createTable("blog_details",(table)=>{
            table.increments("blog_id").primary();
            table.string("blogName");
            table.string("blogDescription");
            table.string("blogAuthor");
        })
    }
})


module.exports = knex;