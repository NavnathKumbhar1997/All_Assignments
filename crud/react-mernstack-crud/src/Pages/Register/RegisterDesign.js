import React from 'react'
import { NavLink } from 'react-router-dom'
import RegisterLogic from './RegisterLogic'

const RegisterDesign = () => {
    let {
        inpvalue,
        setData
    } = RegisterLogic()

  return (
     <div className="container">

    <NavLink to='/'><button className="btn btn-warning mt-4">Back To Home</button></NavLink>

      <form className="row g-3 needs-validation mt-5" novalidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            value={inpvalue.name}
            onChange={setData}
            name="name"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            onChange={setData}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Mobile Number
          </label>
          <div className="input-group has-validation">
            <input
              type="tel" name="phone" pattern="[1-9]{1}[0-9]{9}"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              title="Please Enter valid phone number"
              onChange={setData}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            id="validationCustom03"
            type="email" pattern="[^ @]*@[^ @ ^]*" placeholder="Enter your email"
            title="Enter valid email"
            onChange={setData}
            required
          />

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
        
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterDesign