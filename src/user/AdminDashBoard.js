import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'

// const {firstName,lastName,emailId, role} = isAuthenticated().data.user

const adminLeftSide = ()=>{
return(
  <div className="card">
    <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
    <ul className="list-group">
      <li className="list-group-item bg-dark">
        <h6><Link to="/admin/create/course" className='nav-link text-white'>Create Course</Link></h6>
      </li>
      <li className="list-group-item bg-dark">
        <h6><Link to="/admin/course" className='nav-link text-white'>Manage Course</Link></h6>
      </li>
      <li className="list-group-item bg-dark">
        <h6><Link to="/admin/course" className='nav-link text-white'>Manage Enroll</Link></h6>
      </li>
    </ul>
  </div>
)
}

const adminRightSide = ()=>{
  return(
    <div>
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <h6><span className="badge badge-success mr-2">Name:</span>{isAuthenticated().data.user.firstName} {isAuthenticated().data.user.lastName}</h6>
          </li>
          <li className="list-group-item">
            <h6><span className="badge badge-success mr-2">Email:</span>{isAuthenticated().data.user.emailId}</h6>
          </li>
        </ul>
      </div>
    </div>
  )
}


const AdminDashBoard = () => {
  return (
    <Base title="Welcome to admin area" description="Manage all of your courses here" className="container bg-info p-4">
    <div className="row">
    <div className="col-3"> {adminLeftSide()} </div>
    <div className="col-9"> {adminRightSide()} </div>
    </div>
</Base>
  )
}

export default AdminDashBoard;