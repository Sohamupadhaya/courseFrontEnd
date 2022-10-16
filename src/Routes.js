import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';

const Router = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Signin" element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
