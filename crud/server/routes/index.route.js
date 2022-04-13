const express = require('express')
const router = express.Router(); // used router function from express lib
const users = require("../model/index.model") 
const dbDataCheck = require('../controller/index.controller')

// router.get('/',(req,res)=>{
//     res.send("connected")

// })

router.post('/register',dbDataCheck)

module.exports = router;