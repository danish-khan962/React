import React from 'react'
import { useState, useMemo } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);


    //useMemo is used for making memonizing last thing to make expensive tasks better

    const handleIncrement = () =>{
        setCount(count+1);
    };

    const expensiveTask = (count) =>{
        for(let i=0; i<1000000; i++){};
        return count*2;
    }

    let doubleVal = useMemo(() => expensiveTask(input), [input])
    
  return (
    <div style={{fontSize:'40px'}}>
      <button onClick={handleIncrement} style={{fontSize:'30px'}}>INCREMENT</button>
        <p>Count:  {count}</p>

        <input type="number" placeholder='enter number' value={input} onChange={(e)=> setInput(e.target.value)} style={{fontSize:'30px'}}/>
        <p>Double value: {doubleVal}</p>
    </div>
  )
}

export default Counter
