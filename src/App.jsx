import { React, useEffect } from 'react'
import {Routes, Route,  useLocation} from 'react-router-dom'
import Navbar from './layout/Nav/Nav';
import Home from './pages/Home';
import Footer from './layout/Footer/Footer';
import PrivacyPolicy from './pages/privacy-policy';
import Dashboard from './pages/dashboard';
import TermsOfService from './pages/terms-of-service';
import ForgotPassword from './pages/ForgotPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/reset-password' element={<ForgotPassword />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;