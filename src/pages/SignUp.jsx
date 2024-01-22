import React, { useEffect } from 'react';
import Register from '../components/AuthenticationPages/Register'

const SignUp = () => {
  // update document title
  useEffect(() => {
    document.title = "HEXPRESS | No.1 Trusted Logistics Company";
  }, []);

  return (
    <>
      <Register />
    </>
  )
}

export default SignUp