import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () =>{
        setCount(prevCount => prevCount+1);
    };
    const handledecrement = () =>{
        setCount(prevCount => prevCount-1);
    }
  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handledecrement}>DECREMENT</button>
    </div>
  )
}

export default Counter
