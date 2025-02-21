import React from 'react'
import './style.css';
import { useState, useEffect } from 'react';

const Calculator = () => {

    const [inputValue, setInputValue] = useState('');
    //handle reset
    const handleReset = ()=>{
      setInputValue('');
    }

    const handleDisplay = (value)=>{
      setInputValue(inputValue+value)
    }

    const handleEvaluate = ()=>{
      setInputValue(eval(inputValue))
    }
  return (
    <div id='wrapper'>
      <form id="container">
        <input type="text"  value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
        
        <div id="buttons">
        <section className="one">
          <div className='minor-btns' onClick={handleReset}>AC</div>
          <div className='minor-btns' onClick={()=> handleDisplay('%')}>%</div>
          <div className='minor-btns' onClick={()=> handleDisplay('/')}>/</div>
        </section>

        <section className="two">
          <div className='minor-btns' onClick={()=> handleDisplay('7')}>7</div>
          <div className='minor-btns' onClick={()=> handleDisplay('8')}>8</div>
          <div className='minor-btns' onClick={()=> handleDisplay('9')}>9</div>
          <div className='minor-btns' onClick={()=> handleDisplay('*')}>x</div>
        </section>

        <section className="three">
          <div className='minor-btns' onClick={()=> handleDisplay('4')}>4</div>
          <div className='minor-btns' onClick={()=> handleDisplay('5')}>5</div>
          <div className='minor-btns' onClick={()=> handleDisplay('6')}>6</div>
          <div className='minor-btns' onClick={()=> handleDisplay('-')}>-</div>
        </section>

        <section className="four">
          <div className='minor-btns' onClick={()=> handleDisplay('1')}>1</div>
          <div className='minor-btns' onClick={()=> handleDisplay('2')}>2</div>
          <div className='minor-btns' onClick={()=> handleDisplay('3')}>3</div>
          <div className='minor-btns' onClick={()=> handleDisplay('+')}>+</div>
        </section>

        <section className="five">
          <div className='minor-btns' onClick={()=> handleDisplay('00')}>00</div>
          <div className='minor-btns' onClick={()=> handleDisplay('0')}>0</div>
          <div className='minor-btns' onClick={()=> handleDisplay('.')}>.</div>
          <div className='minor-btns' onClick={()=> handleEvaluate()}>=</div>
        </section>
        </div>
      </form>
    </div>
  )
}

export default Calculator
