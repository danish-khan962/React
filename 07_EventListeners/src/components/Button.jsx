import React from 'react'

const Button = () => {
    const ClickEvent = () =>{
        console.log(Math.random())
    }

   return(
    <div>
        <button onClick={ClickEvent}>Click Me</button>
    </div>
   )
}

export default Button
