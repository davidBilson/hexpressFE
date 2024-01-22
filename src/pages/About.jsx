import React, { useEffect } from 'react';
import AboutUs from '../components/AboutUs/AboutUs';

const About = () => {
  // update document title
  useEffect(() => {
    document.title = "HEXPRESS | No.1 Trusted Logistics Company";
  }, []);

  return (
    <>
        <AboutUs />
    </>
  )
}
export default About;