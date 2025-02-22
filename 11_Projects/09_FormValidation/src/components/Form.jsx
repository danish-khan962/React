import React, { use } from 'react'
import './style.css'
import { useState } from 'react'

const Form = () => {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');


  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [errorConfirmPass, setErrorConfirmPass] = useState('');

  
  const validateForm =(e) =>{
    e.preventDefault();
    if(name.length < 8){
      setName('');
      setErrorName('Name must be more than 8 characters')
    }else{
      setErrorName('');
    }

    if(!email.includes('@')){
      setEmail('')
      setErrorEmail('Email must include @gmail.com')
    }else{
      setErrorEmail('');
    }

    if(pass.length < 8){
      setPass('');
      setErrorPass('Password should be long..')
    }else{
      setErrorPass('');
    }

    if(pass === confirmPass){
      setErrorConfirmPass('');
    }else{
      setConfirmPass('')
      setErrorConfirmPass('Password does not match..')
    }
  }

  return (
    <div id='wrapper'>
  
      <form className="container">
        <input type="text" placeholder='Enter your name...' value={name} onChange={(e)=> setName(e.target.value)}/>
        <p className="errorMessage">{errorName}</p>

        <input type="email" placeholder='Enter your email...' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <p className="errorMessage">{errorEmail}</p>

        <input type="password" placeholder='Enter your password...' value={pass} onChange={(e)=> setPass(e.target.value)}/>
        <p className='errorMessage'>{errorPass}</p>

        <input type="password" placeholder='Confirm your password...' value={confirmPass} onChange={(e)=> setConfirmPass(e.target.value)}/>
        <p className="errorMessage">{errorConfirmPass}</p>

        <button className="submit-btn" onClick={validateForm}>Submit</button>

      </form>
    </div>
  )
}

export default Form
