import React from 'react'
import './Nav.css'
import { FaRegHeart, FaRegUser  } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  return (
    <nav id='navBar'>
      <div id='searchBar'>
        <input type="text" placeholder='Search shoes product here..'/>
      </div>
      <div id='dashboard'>
        <a href="#" className='dashboard-icons'><FaRegHeart/></a>
        <a href="#" className='dashboard-icons'><FiShoppingCart/></a>
        <a href="#" className='dashboard-icons'><FaRegUser/></a>
      </div>
    </nav>
  )
}

export default Nav
