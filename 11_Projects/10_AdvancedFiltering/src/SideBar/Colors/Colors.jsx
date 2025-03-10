import React from 'react'
import './colors.css'
import Input from '../../components/Input'

const Colors = () => {
  return (
    <section className="selectCard">
    <p className="heading">Colors</p>

    <div className="selectors">
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
    </div>
  </section>
  )
}

export default Colors
