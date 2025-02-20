import React from 'react'
import {useState, useEffect } from 'react';

const Variation1 = () => {

    const [count,setCount] = useState(0);
    const handleClick = ()=> {
        setCount(count+1);
    }

    //variation 1: runs on every render
    useEffect(() => {
      console.log('Variation 1 of useEffect, runs on every render..');
    })
    

  return (
    <div style={{display:'flex', height:'100vh', width:'100vw', justifyContent:'center', alignItems:'center', flexDirection:'column', fontFamily:'fantasy' , background:'#f953c6'}}>
        <p style={{fontSize:'25px', fontWeight:'500'}}>Count: <span style={{fontSize:'30px', fontWeight:'600'}}> {count} </span></p>
      <button onClick={handleClick} style={{padding:'0.5rem 2.5rem'}}>CLICK ME</button>
    </div>
  )
}

export default Variation1
