import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="Home">Home</Link>
      <Link to="*">No Page</Link>
    </div>
  )
}

export default Navbar
