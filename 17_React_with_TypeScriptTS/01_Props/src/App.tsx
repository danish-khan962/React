import React from 'react'
import Button from './components/Button'
import { useState } from 'react';

const App = () => {

  const [enabled, setEnabled] = useState(false); 

  const handleClick = () =>{
    setEnabled(true);
    if(enabled == true){
      alert("Button Clicked...")
    }
  };

  const handleDisable = () =>{
    setEnabled(false);
    if(enabled == false){
      console.log("DISABLED...");
    }
  };
  return (
    <div>
      <Button label="CLICK ME" click={handleClick} disabled={handleDisable}/>
    </div>
  )
}

export default App
