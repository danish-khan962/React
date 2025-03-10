import React from 'react'
import './category.css'
import Input from '../../components/Input'

const Category = () => {
  return (
    <section className="selectCard">
      <p className="heading">Category</p>

      <div className="selectors">
        <Input />
        <Input/>
        <Input/>
        <Input/>
        <Input/>
      </div>
    </section>
  )
}

export default Category
