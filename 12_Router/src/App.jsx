import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Contact from './components/Contact'
import ParamComp from './components/ParamComp'
import NotFound from './components/NotFound'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <div>
        <NavBar/>
        <Home/>
      </div>
    },
    {
      path:'/about',
      element: <div>
        <NavBar/>
        <About/>
      </div>
    },
    {
      path:'/profile',
      element: <div>
        <NavBar/>
        <Profile/>
      </div>
    },
    {
      path:'/contact',
      element: <div>
        <NavBar/>
        <Contact/>
      </div>
    },
    {
      path:'/params/:id',
      element: <div>
        <NavBar/>
        <ParamComp/>
      </div>
    },

    //if user hits any random path by mistake
    {
      path: '*',
      element: <NotFound />
    },

  ]
)

const App = () => {
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
