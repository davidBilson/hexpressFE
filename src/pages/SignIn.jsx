import React, { useEffect } from 'react';
import Login from '../components/AuthenticationPages/Login';

const SignIn = () => {
  // update document title
  useEffect(() => {
    document.title = "HEXPRESS | No.1 Trusted Logistics Company";
  }, []);
  
  return (
    <>
      <Login />
    </>
  )
}

export default SignIn