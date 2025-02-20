import React, { useContext } from 'react'
import { UserContext } from '../App'
import { ThemeContext } from '../App';

const ChildC = () => {
    const user = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = ()=>{
        if(theme==='light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }
  return (
    <div>
      DATA: {user.name}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ChildC
