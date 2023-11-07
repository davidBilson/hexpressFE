import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './layout/Nav/Nav';
import Home from './pages/Home';
import Footer from './layout/Footer/Footer';
import PrivacyPolicy from './pages/privacy-policy';
import Dashboard from './pages/dashboard';
import TermsOfService from './pages/terms-of-service';
import ForgotPassword from './pages/ForgotPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import axios from 'axios';

// Create a custom Axios instance with credentials configuration
const axiosWithCredentials = axios.create({
  withCredentials: true, // Include credentials with each request
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Credentials": true
  },
});

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

const App = () => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const getUser = async () => {
      try {
         const response = await axiosWithCredentials.get("https://hexpress.onrender.com/auth/login/success");
         console.log(response)
         
        if (response.status === 200) {
          const resObject = response.data;
          setUser(resObject.user);
          setUserName(user.displayName);
        } else {
          throw new Error("Authentication failed");
        }
      } catch (err) {
        console.log(err, " Unable to authenticate user");
      }
    };
    getUser();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/reset-password' element={<ForgotPassword />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route
          path='/dashboard'
          element={user ? <Dashboard userName={userName} /> : <Navigate to={'/sign-in'} />}
        />
        <Route path='/terms-of-service' element={<TermsOfService />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;