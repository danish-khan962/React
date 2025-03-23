import React, { useState } from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'

const App = () => {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () =>{
    dispatch(increment());
  }
  const handleDecrement = () =>{
    dispatch(decrement());
  }
  const handleReset = () => {
    dispatch(reset());
  }
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(amount));
  }
  return (
    <div>
      <button onClick={handleIncrement}> + </button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}> - </button>
      <br /><br />
      <button onClick={handleReset}>Reset</button>
      <br /><br />
      <input type="number" value={amount} placeholder='Enter amount..' onChange={(e)=> setAmount(e.target.value)}/>
      <br /><br />
      <button onClick={handleIncrementByAmount}>Increment by Amount</button>
    </div>
  )
} 
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';

export default App
