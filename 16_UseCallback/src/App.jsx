import React from 'react'
import { useState , useCallback } from 'react';
import './App.css'
import ChildComponent from './components/ChildComponent';

//useCallback has 2 use cases:
/*
  (i) To stop un-necessary re-rendering of child components by freezing down the function
  (ii) To handle expensive operations
*/
const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() =>{
    setCount(count+1);
  }, [count])
  return (
    <div id='wrapper'>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>INCREMENT</button>

      <ChildComponent name="Click me" handleClick={handleIncrement}/>
    </div>
  )
}

export default App
