import React from 'react'
import { useState } from 'react'
import './Counter.css'


const Counter = () => {

    //creating a count state
    const [count, setCount] = useState(0); //initial value 0

    //creating function to handle increment
    const handleIncrement = () =>{
        console.log("Counter value INCREMENTED...");
        setCount(count+1);
    }

    //creating function to handle decrement
    const handleDecrement = ()=>{
        console.log("Counter value DECREMENTED...");
        setCount(count-1);
    }

    //handle reset
    const handleReset = ()=>{
        setCount(0);
    }
    
  return (
    <div id='wrapper'>
      <p className='p'>Your counter value <span> {count} </span></p>
      <div className="buttons">
        <button id="increment" onClick={handleIncrement}>Increment</button>
        <button id="decrement" onClick={handleDecrement}>Decrement</button>
        <button id='reset' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
