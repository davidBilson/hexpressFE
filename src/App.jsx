import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './layout/Nav/Nav'
import Home from './pages/Home'
import Footer from './layout/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App