const express = require('express')

const app = express()

app.get('',(req,res)=>{
    res.send('hi these is test')
})

app.post('insert',(req,res)=>{  
})

app.listen(3001,()=>{
    console.log("server listening at 3001");
})
