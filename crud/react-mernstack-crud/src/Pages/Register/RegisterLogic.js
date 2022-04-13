import React, { useState } from "react";
//  import {NavLink} from 'react-router-dom'
 import RegisterDesign from "./RegisterDesign";

const RegisterLogic = () => {

    const [inpvalue,setINP] = useState({
        name:"",
        lastname:"",
        mobile:"",
        email:""
    
    })
   

    const setData = (e) =>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setINP((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }

  return {
    inpvalue,
    setData
  }
}

export default RegisterLogic;
