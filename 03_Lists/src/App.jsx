import React from 'react'

const App = () => {

  const userInfo = [
    {
      name : "Danish",
      email: "danish@example.com",
      age: 20
    },
    {
      name : "Subhasri",
      email: "subhasri@example.com",
      age: 20
    },
    {
      name : "Matreyi",
      email: "matreyi@example.com",
      age: 20
    }
  ]

  //iterating userInfo array details into DOM
  return (
    <div>
      { userInfo.map(details => (
        <ul key={Math.random()}>  
          <li>{details.name}</li>
          <li>{details.email}</li>
          <li>{details.age}</li>
        </ul>
      ))}
    </div>
  )
}

export default App
