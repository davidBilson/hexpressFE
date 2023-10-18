import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './layout/Nav/Nav'
import Home from './pages/Home'
import Footer from './layout/Footer/Footer'
import PrivacyPolicy from './pages/privacy-policy'
import TermsOfService from './pages/terms-of-service'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy />} ></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
        <Route path='/terms-of-service' element={<TermsOfService />} ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App