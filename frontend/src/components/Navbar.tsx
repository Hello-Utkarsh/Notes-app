import React, {useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  let location = useLocation();

  // useEffect(() => {
  // }, [location]);

  return (
    <nav className='navbar'>
      <h1>Notes-App</h1>
      <ul className='navbar-locate-page'>
        <Link to="/" style={{color: `${location.pathname=="/"?"white":"grey"}`}}>Home</Link>
        <Link to="/About" style={{color: `${location.pathname=="/About"?"white":"grey"}`}}>About</Link>
      </ul>
    </nav>

  )
}

export default Navbar
