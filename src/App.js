import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Index'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
