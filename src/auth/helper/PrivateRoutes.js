import React from 'react'
import {Route, Redirect,Navigate} from 'react-router-dom'

import {isAuthenticated} from "./index"

const PrivateRoute = ({children}) => {
    return( 
        isAuthenticated() ? children : <Navigate to="/Signin"/>
      )
  }

export default PrivateRoute;