import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'

//we imported link because , this tag does not re-redner the page..

//NavLink has already built in active class

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to='/' className={({isActive}) => isActive ? "active-link" : ""} id='text'>Home</NavLink></li>
        <li><NavLink to='/about' className={({isActive}) => isActive ? "active-link" : ""} id='text'>About Us</NavLink></li>
        <li><NavLink to='/profile' className={({isActive}) => isActive ? "active-link" : ""} id='text'>Profile</NavLink></li>
        <li><NavLink to='/contact' className={({isActive}) => isActive ? "active-link" : ""} id='text'>Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar
