import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './layout/Nav/Nav';
import Home from './pages/home';
import Footer from './layout/Footer/Footer';
import PrivacyPolicy from './pages/privacy-policy';
import Dashboard from './pages/dashboard';
import TermsOfService from './pages/terms-of-service';
import ForgotPassword from './pages/ForgotPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import axios from 'axios';
import useStore from './store/useStore';
import { Tooltip } from 'react-tooltip'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

AOS.init({
  // Global settings:
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});

const App = () => {

  // states from zustand
  const user = useStore((initialState) => initialState.user)
  const userName = useStore((initialState) => initialState.userName)

  // fetch current state from store
  // check if user state is null or true
  // if user state is true, set data to local storage, since local storage persists
  // if page reloads or hard reload, check if user data is available in local storage, then use that to update the user state
  useEffect(() => {
    if (!user) {
      
    } else if (user) {
      alert("user is logged in")
    }
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/auth/getCurrentUser', {
  //         withCredentials: true, // Include credentials for CORS
  //       });
  //       console.log(response)
        
  //     } catch (error) {
  //       console.error('Error fetching user details:', error);
  //     }
  //   };

  //   fetchData();
    
  // }, []); // Run this effect only once when the component mounts

  return (
    <>
      <Tooltip id="my-tooltip" style={{
          zIndex: "500", 
          background: "darkslategrey", 
          padding: "4px", 
          color: "lightgrey", 
          fontSize: "10px",
          boxShadow: "0px 0px 5px lightgrey"
        }}
      />
      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={user === true ? <Navigate to={'/'} /> : <SignIn /> } />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/reset-password' element={<ForgotPassword />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route
          path='/dashboard'
          element={user ? <Dashboard /> : <Navigate to={'/sign-in'} />}
        />
        <Route path='/terms-of-service' element={<TermsOfService />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;