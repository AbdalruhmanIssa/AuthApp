import React from 'react'
import Navbar from './components/NAvbar'
import Home from './components/Home'
import Login from './components/login'
import Register from './components/register'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/'element={<Home />} >
        </Route>
        <Route path='/login'element={<Login />} ></Route>
        <Route path='/register'element={<Register />}></Route>
        <Route path='/*'element={<h2>page not found</h2>} ></Route>

      </Routes>

    </>
  )
}
