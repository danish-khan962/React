/*Importing index.css*/
import "./index.css"


//FOR REACT ICONS
//in terminal :-> npm install react-icons --save
//next step is importing
import { SiCss3 } from "react-icons/si";


const App = () =>{

  const styles = {color: "black" , backgroundColor: "#212121", padding: "2rem"};

  return(
    <div>
      {/* Inline styles */}
      <h1 style={{color: "black" , backgroundColor: "crimson", padding: "2rem" }}>Inline styles technique 1</h1>
      <h1 style={styles}>Inline styles technique 2</h1>

      <div className="wrapper">
        <h2>THIS IS EXTERNAL CSS {/*using react-icons here */} <SiCss3 /></h2>
      </div>
    </div>
  )
}

export default App