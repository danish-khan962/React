import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  const handleHomeDirection = ()=>{
    navigate('/');
  }
  const handleProfileDirection = ()=>{
    navigate('/profile');
  }
  const handleContactDirection = ()=>{
    navigate('/contact');
  }
  return (
    <div style={{textAlign: 'center'}}>
      <h1>This is ABOUT US PAGE</h1>

      <button onClick={handleHomeDirection}>Click to go on HOME page...</button>
      <button onClick={handleProfileDirection}>Click to go on PROFILE page..</button>
      <button onClick={handleContactDirection}>Click to go on Contact Page..</button>
    </div>
  )
}

export default About
