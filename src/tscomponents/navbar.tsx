import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = React.useState<boolean>(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return ( 
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"> <img style={{width:40}} src={logo} alt="logo"/></Link>
            <button className=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                <NavLink className="nav-item nav-link" to="/">Homepage</NavLink>
                <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
                <NavLink className="nav-item nav-link" to="/view">View List</NavLink>
            </div>
      </nav>

     );
}
 
export default NavBar;

