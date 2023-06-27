import React, {useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  let location = useLocation();

  return (
    <nav className='d-flex justify-content-between text-decoration-none mt-4 mx-5' >
      <h1>Notes-App</h1>
      <ul className='d-flex justify-content-around w-25'>
        <Link to="/" className='text-decoration-none' style={{color: `${location.pathname=="/"?"white":"grey"}`}}>Home</Link>
        <Link to="/About" className='text-decoration-none' style={{color: `${location.pathname=="/About"?"white":"grey"}`}}>About</Link>
      </ul>
    </nav>

  )
}

export default Navbar
