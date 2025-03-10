import React from 'react'
import './sidebar.css'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'

const Sidebar = () => {
  return (
   <>
    <section id='sidebar'>
        <div className="label">
            <p className="logo">CART</p>
        </div>

        <Category />
        <Price />
        <Colors />

    </section>
   </>
  )
}

export default Sidebar
