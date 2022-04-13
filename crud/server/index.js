require('dotenv').config();
const express = require('express');
const app = express();
require('./config/conn');
const users = require("./model/index.model");

const port  = 8001;


app.get("/",(req,res)=>{
    res.send("<h1>Server is working </h1>")
})

app.listen(port,()=>{
    console.log((`server is listing at ${port} `));
})
