import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/about')
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>This is HOME PAGE</h1>

      <button onClick={handleClick}>Click to go on ABOUT page...</button>
    </div>
  )
}

export default Home
