import React from 'react';
import { NavLink , Link } from "react-router-dom";

function HeadNavbar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="#">ADPP</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Courses</a>
          </li>
          <li className="nav-item">
            <NavLink to="/head/requests" className="nav-link" href="#">Requests</NavLink>
          </li>
        </ul>

      </div>
    </nav>
    )
}
export default HeadNavbar;