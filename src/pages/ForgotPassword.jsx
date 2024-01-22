import React, { useEffect } from 'react';
import ResetPassword from '../components/AuthenticationPages/ResetPassword';

const ForgotPassword = () => {
  // update document title
  useEffect(() => {
    document.title = "HEXPRESS | No.1 Trusted Logistics Company";
  }, []);

  return (
    <>
        <ResetPassword />
    </>
  )
}

export default ForgotPassword