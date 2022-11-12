import React from 'react'
import {Route, Redirect,Navigate} from 'react-router-dom'

import {isAuthenticated} from "./index"

const AdminRoute = ({children}) => {
    return( 
      isAuthenticated() && isAuthenticated().data.user.role === 1 ? children : <Navigate to="/Signin"/>
      )
  }

export default AdminRoute;