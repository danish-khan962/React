import React, { useRef } from 'react'
import { useState , useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0); //useState re-renders
    let val = useRef(0); //useRef does not do re-renders and persist values

    //for checking re-rendering of page
    useEffect(() => {
    console.log("Page re-rendered....|")
    }) //no dependency, runs on every render
    

    //main purpose of useRef to access direct DOM elements and manipulate them.
    let btnRef = useRef();

    const handleIncrement = () =>{
        val.current = val.current+1;
        console.log("Value at useRef: ", val);
        setCount(count+1);
    };
    const handleDecrement = () =>{
        val.current = val.current-1;
        console.log("Value at useRef: ", val);
        setCount(count-1);
    }

    const handleColorChange = () =>{
        btnRef.current.style.backgroundColor = 'red';
    }

  return (
    <div style={{fontSize:'40px'}}>
      <p>{count}</p>
      <div>
        <button onClick={handleIncrement} style={{fontSize:'25px'}} ref={btnRef}>Add value</button>
        <button onClick={handleDecrement} style={{fontSize:'25px'}}>Remove value</button>
      </div>

      <button onClick={handleColorChange}>Change color of buttons</button>
    </div>
  )
}

export default Counter
