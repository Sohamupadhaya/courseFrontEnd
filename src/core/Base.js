import React from 'react'
import { NavLink } from 'react-router-dom'
import Menu  from './Menu'
 const Base = ({
    title="Coursehub",
    description="Readers Are Leaders",
    className="bg-dark text-white p-4",
    children
 }) => {
    return(
        <div>
        <Menu/>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4 text">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                    <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-info text-white text-center py-3">
                    <h1>Course Hub</h1>
                    <NavLink to="/Home"><button className="btn btn-muted btn-lg text-muted">Home</button></NavLink>{"\u00a0\u00a0"}
                    <button className="btn btn-muted btn-lg text-white">Contact Us</button>{"\u00a0\u00a0"}
                    <button className="btn btn-muted btn-lg">about</button>
                    <div className="container-fluid">
                    <br/>
                    
                    <i class="fa fa-facebook" aria-hidden="true"></i>{"\u00a0\u00a0"}
                    <i class="fa fa-instagram" aria-hidden="true"></i>{"\u00a0\u00a0"}
                    <i class="fa fa-twitter" aria-hidden="true"></i>{"\u00a0\u00a0"}
                    <i class="fa fa-twitter" aria-hidden="true"></i>{"\u00a0\u00a0"}
                    <i class="fa fa-google-plus" aria-hidden="true"></i>{"\u00a0\u00a0"}
                    </div>
                    <br/>
                    <div className="container-fluid">
                    <span className="text-white">
                        @2022 An Amazing Place To Learn Skills
                    </span>
                </div>
                </div>
            </footer>
        </div>
    )
 }
export default Base
