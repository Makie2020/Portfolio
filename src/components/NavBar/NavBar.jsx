import { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

function Navbar() {
  const [isActive, setisActive] = useState(false)     
  return (
    <div>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <NavLink className="navbar-item logo" to='/'>
                ML     
              </NavLink>
              <a 
              onClick={() => {
                  setisActive(!isActive)
                }}
              role="button" 
              className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
              aria-label="menu" 
              aria-expanded="false" 
              data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </a>
          </div>
          <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <div className  ="navbar-end">
              <NavLink className="navbar-item" to='/'>Home</NavLink>
              <NavLink className="navbar-item" to='Portfolio/about'>About Me</NavLink>          
              <NavLink className="navbar-item" to='Portfolio/projects'>Projects</NavLink>
              <NavLink className="navbar-item" to='Portfolio/contact'>Contact</NavLink>
            </div>    
          </div>
        </nav>
      </div>
  );
}
export default Navbar;
