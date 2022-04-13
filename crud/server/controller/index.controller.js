const users = require("../model/index.model");


const DbConn  = async(req,res)=>{
    // console.log(req.body);
    const {name,lastname,mobile,email} = req.body;  // requested data from form to insert

    // its check mandatory fields
    if(!name || !lastname || !mobile || !email){
        res.status(404).send("plz fill all ther details")
    }
    try{
        //matching the database email and user inserted email
        const preuser = await users.findOne({email:email})
        console.log(preuser);

        if(preuser){
            res.status(404).send("user is already present")
        }else{
            const addUser = new users(
                {
                    name,lastname,mobile,email
                }
            )
            //save and show the inserted datain json formate
            await addUser.save();
            res.status(201).json(addUser)
            console.log(addUser);
            
        }

    }catch(error){
        res.status(404).send(error)
    }
}

module.exports = DbConn;