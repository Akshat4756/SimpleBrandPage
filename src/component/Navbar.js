import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
<nav className='container navbar'>
    <div className='nav-logo'>
    <img src='images/brand_logo.png' alt='logo'></img>
    </div>
    <ul className='navbar-group'>
        <li  >
        <a className='navbar-link' href='#'>Menu</a>
        </li>
        <li >
           <a  className='navbar-link' href='#'> Location</a>
        </li>
        <li >
        <a  className='navbar-link' href='#'> About</a>
        </li>
        <li >
        <a  className='navbar-link' href='#'> Contact</a>
        </li>
    </ul>
    <button className='nav-button'>
    Login
    </button>
</nav>
    </div>
  )
}

export default Navbar