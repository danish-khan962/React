import Weather from "./components/Weather"
import UserStatus from "./components/UserStatus"
import Greetings from "./components/Greetings"

const App = () =>{
  return(
    <div>
      <Weather />
      
      <UserStatus loggedIn={true} isAdmin={false} />

      <Greetings timeOfDay = "morning" />
    </div>
  )
}

export default App