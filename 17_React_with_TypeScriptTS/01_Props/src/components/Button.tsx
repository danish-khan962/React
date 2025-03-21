import React from 'react'
import './Button.css'

const Button = (props: {label: string, click: any, disabled:any}) => {
  return (
    <div>
      <button onClick={props.click}>{props.label}</button>
      <button onClick={props.disabled}>DISABLE</button>
    </div>
  )
}

export default Button
