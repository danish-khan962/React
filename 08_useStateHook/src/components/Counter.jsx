import React from 'react'
import {useState} from 'react'

const Counter = () => {

    //creating useState hook()
    const [count, setCount] = useState(0);  //0 is initial value(count) and setCount is the function

    //addValue function
    const addValue = () => setCount(count+1);
    const removeValue = () => setCount(count-1);

  return (
    <div className='wrapper'>
      <div className="container">
        <div className="screen">{count}</div>
        
        <div className="buttons">
            <button onClick={addValue}>Add value</button>
            <button onClick={removeValue}>Remove value</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
