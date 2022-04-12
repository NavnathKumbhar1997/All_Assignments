import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {

    const [inpvalue,setINP] = useState({
        name:"",
        lastname:"",
        mobile:"",
        email:""
    
    })

    const setdata = (e) =>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setINP((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }


  return (
    <div className="container">

    <NavLink to='/'><button className="btn btn-warning mt-4">Back To Home</button></NavLink>

      <form className="row g-3 needs-validation mt-5" noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            onChange={setdata}
            name="name"
            value={inpvalue.name}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            value={inpvalue.name}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Mobile Number
          </label>
          <div className="input-group has-validation">
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              value={inpvalue.mobile}
              required
            />
            <div className="invalid-feedback">Please Enter Mobile Number.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            
            required
          />
          <div className="invalid-feedback">Please provide a valid Email.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">
            State
          </label>
          <select className="form-select" id="validationCustom04" required>
            <option>
              Choose...
            </option>
            <option>Maharashtra</option>
            <option>Gujarat</option>
            <option>Karnataka</option>
            <option>Telengana</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
