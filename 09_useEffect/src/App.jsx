import React from 'react'
import Variation1 from './components/Variation1'
import Variation2 from './components/Variation2'
import Variation3 from './components/Variation3'
import Variation4 from './components/Variation4'
import Variation5 from './components/Variation5'

const App = () => {

  //first -> side-effect function
  //second -> clean up function
  //third -> comma separated dependecny array/list

  return (
    <div>
      <Variation1 />
      <Variation2 />
      <Variation3 />
      <Variation4 />
      <Variation5 />
    </div>
  )
}

export default App
