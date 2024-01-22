import React, { useEffect } from 'react';
import PricingHero from '../components/Pricing/PricingHero'
import PricingCarousel from '../components/Pricing/PricingCarousel'

const Pricing = () => {
  // update document title
  useEffect(() => {
    document.title = "HEXPRESS | No.1 Trusted Logistics Company";
  }, []);

  return (
    <>
      <PricingHero />
      <PricingCarousel />
    </>
  )
}

export default Pricing