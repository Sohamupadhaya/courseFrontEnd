import React,{Fragment} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signout,isAuthenticated } from "../auth/helper";


const Menu = () =>{
  const navigate  = useNavigate();
return(
  <div>
    <ul className="nav nav-tabs bg-dark">
    <li className="nav-item">
        <NavLink
          style={({ isActive }) => {
            return {
              background: isActive ? "#343a40" : "#",
              color: isActive ? "#5bc0de" : "#FFFFFF",
            };
          }}
          className="nav-link"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          style={({ isActive }) => {
            return {
              background: isActive ? "#343a40" : "#",
              color: isActive ? "#5bc0de" : "#FFFFFF",
            };
          }}
          className="nav-link"
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          style={({ isActive }) => {
            return {
              background: isActive ? "#343a40" : "#",
              color: isActive ? "#5bc0de" : "#FFFFFF",
            };
          }}
          className="nav-link"
          to="/admin/dashboard"
        >
          A.Dashboard
        </NavLink>
      </li>
      {!isAuthenticated() && (
        <Fragment>
      <li className="nav-item">
        <NavLink
          style={({ isActive }) => {
            return {
              background: isActive ? "#343a40" : "#",
              color: isActive ? "#5bc0de" : "#FFFFFF",
            };
          }}
          className="nav-link"
          to="/Signup"
        >
          Sign Up
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          style={({ isActive }) => {
            return {
              background: isActive ? "#343a40" : "#",
              color: isActive ? "#5bc0de" : "#FFFFFF",
            };
          }}
          className="nav-link"
          to="/signin"
        >
          Sign In
        </NavLink>
      </li>
      </Fragment>
      )}
      {isAuthenticated() && (
          <li className="nav-item">
            <span
              onClick={() => {
                signout(() => {
                  navigate("/")
                });
              }}
              className="nav-link text-warning"
            >
              Signout
            </span>
          </li>
        )}
    </ul>
  </div>
)};

export default Menu;
