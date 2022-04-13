const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')
const DB = "mongodb+srv://crudeTest:WIy78IILrAytb5ln@cluster0.d5gxo.mongodb.net/mern_stack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection succesfull")).catch((err)=>console.log(err.message));

