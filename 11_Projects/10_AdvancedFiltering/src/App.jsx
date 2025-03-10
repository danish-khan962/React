import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Product from './Products/Product'
import Recommend from './Recommend/Recommend'
import Sidebar from './SideBar/Sidebar'

//database
import data from './database/data'

const App = () => {

  //Input filter
  const [query, setQuery] = useState('');
  const handleInputChange = (e) =>{
    setQuery(e.target.value);
  };
  const filteredItems = data.filter((product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  )


  //radio filter
  const [category, setCategory] = useState(null);
  const handleChange = (e) =>{
    setCategory(e.target.value);
  }

  //buttons filter
  const handleClick = (e) =>{
    setCategory(e.target.value);
  }

  return (
    <div>
      <Sidebar />
      <Nav />
      <Recommend />
      <Product />
    </div>
  )
}

export default App
