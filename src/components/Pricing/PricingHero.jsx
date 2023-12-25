import React, { useState } from 'react'
import style from "./PricingHero.module.css"
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import useStore from '../../store/useStore';

const PricingHero = () => {

  const distanceUnit = useStore((initialState) => initialState.distanceUnit )
  const setDistanceUnit = useStore((initialState) => initialState.setDistanceUnit)

  return (
    <section className={style["pricing-hero-container"]} >
      <h1 className={style["pricing-header"]} >Our pricing is simple with no hidden fees</h1>
      <p className={style["pricing-text"]}>Pricing plans suitable for every individual and businesses</p>
      <div className={style["pricing-unit"]} >
        <p>
          <span className={style["price"]}>Price</span>  
          &nbsp;/&nbsp;
          <span className={style["unit"]}>{distanceUnit ? "Mile" : "Kilometer"}</span></p>
        <button 
          className={style["pricing-unit-button"]} 
          onClick={() => setDistanceUnit()}
        >
          {distanceUnit ? <FaToggleOff size="25px" style={{color: "var(--darkcyan)"}} /> : <FaToggleOn size="25px" style={{color: "var(--darkcyan)"}} />}
        </button>
      </div>
    </section>
  )
}

export default PricingHero