import React, {useState} from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import {signup} from "../auth/helper/index"
const Signup =()=>{

    const [values,setValues] = useState({
        firstName:"",
        lastName:"",
        emailId:"",
        password:"",
        mobileNumber:"",
        countryCode:"",
        error:"",
        success:false
    })

    const {firstName,lastName,emailId,password,mobileNumber,countryCode,error,success} = values

    const handleChange = (name) => event=>{
        setValues({...values, error:false,[name]:event.target.value})
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        setValues({...values, error:false})
        signup({firstName,lastName,emailId,password,mobileNumber,countryCode})
        .then(data =>{
            if (data.error) {
                setValues({...values,error:data.error,success:false})
            }
            else{
                setValues({...values,firstName:"",lastName:"",emailId:"",error:"",password:"",countryCode:"",mobileNumber:"",success:true})
            }
        })
        .catch(console.log("error in signup"))
    }

    const SignUpForm = () => {
            return(
                <div className="row">
                    <div className="col-md-6 offset-sm-3 text-left">
                        <form>
                            <div className="form-group">
                                <label className="text-light">
                                    First Name
                                </label>
                                <input type="text" onChange={handleChange("firstName")} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="text-light">
                                    Last Name
                                </label>
                                <input type="text" onChange={handleChange("lastName")} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="text-light">
                                    Email
                                </label>
                                <input type="text" onChange={handleChange("emailId")} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="text-light">
                                    Password
                                </label>
                                <input type="password" onChange={handleChange("password")} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="text-light">
                                    Phone
                                </label>
                                <input type="text" onChange={handleChange("mobileNumber")} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="text-light">
                                    Country Code
                                </label>
                                <input type="text" onChange={handleChange("countryCode")} className="form-control"/>
                            </div>
                            <button onClick={onSubmit} className="btn btn-info btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            )
    }

    const successMessage = () => {
        return(
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-success" style={{display: success ?"":"none"}}>
            New account was created successfully. please
            <Link to="/signin">
            Login here
            </Link>
        </div>
        </div>
        </div>
    )}
    const errorMessage = () => {
        return(
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-danger" style={{display: error ?"":"none"}}>
            {error[0]}
        </div>
        </div>
        </div>
    )}

    return(
    <Base title="Sign Up" description="">
        <h1>Sign Up</h1>
        {successMessage()}
        {errorMessage()}
        {SignUpForm()}
        <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
)}
export default Signup
