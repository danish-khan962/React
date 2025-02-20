import React, { useState, createContext } from 'react';
 
import ChildA from './components/ChildA'
import { use } from 'react';

//step 1: create context
const UserContext = createContext();
const ThemeContext = createContext();

//step 2: wrap all the child inside a provider
//step 3: pass value
//step 4: go to consumer and consume it


const App = () => {
  const [user, setUser] = useState({name:'DANISH'});
  const [theme, setTheme] = useState('light');
  return (
    <div>
      <ThemeContext.Provider value={{theme, setTheme}}>
          <div id='container' style={{height:'100vh', width:'100vw', backgroundColor:theme==='light'?"#ffffff":"#212121"}}>
          <UserContext.Provider value={user}>
             <ChildA />
          </UserContext.Provider>
          </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
export {UserContext}
export {ThemeContext}