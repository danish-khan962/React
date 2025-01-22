import React from 'react'

const Greetings = () => {

    const greetMessage = "HELLO!";
    const date = new Date().toLocaleDateString();
  return (
    <div>
      <h1>{greetMessage}</h1>
      <p>{date}</p>
    </div>
  )
}

export default Greetings
