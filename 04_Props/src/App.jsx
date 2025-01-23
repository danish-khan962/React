//Porps
const App = () => {
  return (
    <div>
      <User name="Danish" age={20} isWorking={false} langs={['Python', 'Javascript', 'C++', 'Java']} />
    </div>
  )
}
export default App


//returning props
const User = (props) => {
  let imageLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8eTPN0iYnghfQmscPabIgSJT93Q-vhPYvw&s";
  return (
    <div>
      <img src={imageLink} alt={props.name}/>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Working Status: {props.isWorking}</h2>
      <h2>Languages known: {props.langs}</h2>
    </div>
  )
}