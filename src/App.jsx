import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
// zustand store
import useStore from './store/useStore';
// UI components//
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
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
// Libraries
import axios from 'axios';
import { Tooltip } from 'react-tooltip'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CircleLoader  } from 'react-spinners'

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
  // access actions from store
  const setUserName = useStore((initialState) => initialState.setUserName);
  const setUserEmail = useStore((initialState) => initialState.setUserEmail);
  const userLoggedIn = useStore((initialState) => initialState.setUser);

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');
    if (userId) {
      const  fetchUserData = async (req, res) => {
        try {
          const response = await axios.post(`http://localhost:5000/user/getUserData/${userId}`);
          console.log(response)

          if (response.data.success === false) {
              console.log("User not found, proceed to signup");
          } else {
              // Process the user data since it exists
              userLoggedIn(true);
              setUserName(response.data.firstName + ' ' + response.data.lastName);
              setUserEmail(response.data.email);
          }
        } catch (error) {
          console.log(error);
        }
      }
      fetchUserData();
    }
  }, []);

  // Zustand store to access loadAnimation states and actions
  const { loadAnimation } = useStore();

  return (
    <>
    {
      loadAnimation 
      &&
      <div className={"loadingAnimation"} >
        <CircleLoader  color="white" loading={true} size={100} />
      </div>
    }
      <Tooltip id="my-tooltip" 
        style={{
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
        <Route path="/pricing" element={<Pricing />} />
        <Route path='/sign-in' element={<SignIn /> } />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/reset-password' element={<ForgotPassword />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route
          path='/dashboard'
          element={user ? <Dashboard /> : <Navigate to={'/sign-in'} />}
        />
        <Route path='/terms-of-service' element={<TermsOfService />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;