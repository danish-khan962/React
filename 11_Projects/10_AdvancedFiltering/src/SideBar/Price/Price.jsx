import React from 'react'
import './price.css'
import Input from '../../components/Input'

const Price = () => {
  return (
    <section className="selectCard">
    <p className="heading">Price</p>

    <div className="selectors">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  </section>
  )
}

export default Price
