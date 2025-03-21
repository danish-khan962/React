import React from 'react'

const ChildComponent = (props) => {
    console.log("Child component re-rendered..")
  return (
    <div>
      <button onClick={props.handleClick}>{props.name}</button>
    </div>
  )
}

export default ChildComponent
