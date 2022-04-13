require('dotenv').config();
require('./config/conn');
const router = require('./routes/index.route')
const express = require('express');
const app = express();
const users = require("./model/index.model");
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use(router)

const port  = 8001;


// app.get("/",(req,res)=>{
//     res.send("<h1>Server is working </h1>")
// })

app.listen(port,()=>{
    console.log((`server is listing at ${port} `));
})
