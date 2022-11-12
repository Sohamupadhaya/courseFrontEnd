import React,{useState} from 'react'
import Base from '../core/Base'
import { Link,Navigate } from 'react-router-dom'

import {signin,autnenticate,isAuthenticated} from "../auth/helper"

const Signin = () => {
    const [values,setValues] = useState({
        emailId:"a@gmail.com",
        password:"12345",
        error:"",
        loading:false,
        didRedirect:false
    })
    const {emailId,password,error,loading,didRedirect} = values
    const {data} = isAuthenticated();

    const handleChange = (name) => event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmit = (event)=>{
        event.preventDefault()
        setValues({...values,error:false,loading:true})
        signin({emailId,password})
        .then(data=>{
            if (data.error){
                setValues({...values,error:data.error,loading:false})
            }
            else {
                autnenticate(data,()=>{
                    setValues({...values,didRedirect:true})
                })
            }
        })
        .catch(console.log("Failed to login"))
    }

    const peformRedirect = () =>{
        if (didRedirect) {
            if (data.user && data.user.role===1) {
                return <Navigate to="/admin/dashboard"/>
            }
            else {
                return <Navigate to="/dashboard"/>
            }
        }
        if (isAuthenticated()){
            return <Navigate to="/" />
        }
    }
    const loadingMessage = () => {
        return(
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
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

  const SignInForm = () => {
    return(
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left ">
                <form>
                    <div className="form-group">
                        <label className="text-light">
                            Email
                        </label>
                        <input onChange={handleChange("emailId")} value={emailId} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="text-light">
                            Password
                        </label>
                        <input onChange={handleChange("password")} value={password} type="text" className="form-control"/>
                    </div>
                    <button onClick={onSubmit} className="btn btn-info btn-block">Submit</button>
                </form>
            </div>
        </div>
    )
}
  return (
    <Base title="SignIn">
        {loadingMessage()}
        {errorMessage()}
        <h1>Sign In</h1>
        {SignInForm()}
        {peformRedirect()}
        <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  )
}

export default Signin