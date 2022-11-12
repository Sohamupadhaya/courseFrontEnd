import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoute from './auth/helper/PrivateRoutes';
import Home from './core/Home';
import AdminDashBoard from './user/AdminDashBoard';
import Signin from './user/Signin';
import Signup from './user/Signup';
import UserDashBoard from './user/UserDashBoard';
import AddCourse from "./admin/AddCourse"
import ManageCourse from "./admin/ManageCourse"
import Pdf from './user/pdf'

const Router = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/admin/dashboard" element={ <AdminRoute> <AdminDashBoard/> </AdminRoute>}/>
        <Route path="/admin/create/course" element={ <AdminRoute> <AddCourse/> </AdminRoute>}/>
        <Route path="/admin/course" element={ <AdminRoute> <ManageCourse/> </AdminRoute>}/>
        <Route path="/dashboard" element={ <PrivateRoute> <UserDashBoard/> </PrivateRoute>}/>
        <Route path="/admin/pdf" element={ <PrivateRoute> <Pdf/> </PrivateRoute>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
