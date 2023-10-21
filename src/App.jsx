import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './layout/Nav/Nav'
import Home from './pages/Home'
import Footer from './layout/Footer/Footer'
import PrivacyPolicy from './pages/privacy-policy'
import Dashboard from './pages/dashboard'
import TermsOfService from './pages/terms-of-service'
import ForgotPassword from './pages/ForgotPassword'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/reset-password' element={<ForgotPassword />} ></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy />} ></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
        <Route path='/terms-of-service' element={<TermsOfService />} ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App