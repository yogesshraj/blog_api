const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const knex = require("./model/knex")

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(require("./routes/signup"));
app.use(require("./routes/login"));
app.use(require("./routes/post"));
app.use(require("./routes/patch"));
app.use(require("./routes/get"));
app.use(require("./routes/del"));

// Error Handling
app.use((req,res,next)=>{
    const error = new Error("Not found");
    error.status = 404;
    next(error)
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.sendStatus(error.status);
})


// Localhost
const port = 2999
app.listen(port);
console.log("listening at "+port);
