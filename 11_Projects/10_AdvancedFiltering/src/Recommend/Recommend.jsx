import React from 'react'
import './recommend.css'

const Recommend = () => {
  return (
    <div id='recommendBar'>
      <p className="title">recommended</p>

      <div className="buttons">
        <button className="btn">All Products</button>
        <button className="btn">Nike</button>
        <button className="btn">Adidas</button>
        <button className="btn">Puma</button>
        <button className="btn">Vans</button>
      </div>
    </div>
  )
}

export default Recommend
