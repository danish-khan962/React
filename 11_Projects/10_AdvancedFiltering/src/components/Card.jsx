import React from 'react'
import { FaStar } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";

const Card = () => {
  return (
    <div className="card">
      <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="" />

      <div className="details">
        <p className="title">Nike Air Monarch IV</p>

        <div className="ratings">
          <div className="stars">
            <FaStar className='star-icon' /> <FaStar className='star-icon' /> <FaStar className='star-icon' /> <FaStar className='star-icon' />
          </div>
          <p className="review">123 review</p>
        </div>

        <div className="price-tags">
          <div className="prices">
            <del>$140,00</del> <span>300</span>
          </div>
          <p className='bag'><HiShoppingBag /></p>
        </div>
      </div>
    </div>
  )
}

export default Card
