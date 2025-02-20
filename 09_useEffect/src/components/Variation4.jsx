import React from 'react'
import { useState, useEffect } from 'react'

const Variation4 = () => {

    const [count,setCount] = useState(0);
    const [total, setTotal] = useState(1);
        const handleClick = ()=> {
            setCount(count+1);
        }
        const handleTotal = ()=>{
            setTotal(total+1);
        }
    
        //variation 4: multiple dependency
        useEffect(() => {
          console.log('Variation 4 of useEffect, runs on multiple dependency..');
        }, [count, total]) //dependency on count 


  return (
    <div style={{display:'flex', height:'100vh', width:'100vw', justifyContent:'center', alignItems:'center', flexDirection:'column', fontFamily:'fantasy', background:'#74ebd5'}}>
        <p style={{fontSize:'25px', fontWeight:'500'}}>Count: <span style={{fontSize:'30px', fontWeight:'600'}}> {count} </span></p>
      <button onClick={handleClick} style={{padding:'0.5rem 2.5rem'}}>CLICK ME</button>
      <p style={{fontSize:'25px', fontWeight:'500'}}>Total: <span style={{fontSize:'30px', fontWeight:'600'}}> {total} </span> </p>
      <p>//this will effect on render, working on multiple variable dependecny updation</p>
      <button onClick={handleTotal} style={{padding:'0.5rem 2.5rem'}}>INCREMENT TOTAL</button>
    </div>
  )
}

export default Variation4
