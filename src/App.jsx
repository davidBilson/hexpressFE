import React, { useEffect } from 'react';
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
import useStore from './store/useStore';
import { Tooltip } from 'react-tooltip'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

const App = () => {

  // states from zustand
  // instead of using object destructuring to import state from zustand, do it this way so as to access the latest update of the state
  const user = useStore((initialState) => initialState.user)
  const userName = useStore((initialState) => initialState.userName)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/getCurrentUser', {
          withCredentials: true, // Include credentials for CORS
        });
        console.log(response)
        
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchData();
    
  }, []); // Run this effect only once when the component mounts

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
        <Route path='/sign-in' element={<SignIn />} />
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