import React, { useState } from 'react'
import style from "./PricingHero.module.css"
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const PricingHero = () => {

  const [switchUnit, setSwitchUnit] = useState(true)

  return (
    <section className={style["pricing-hero-container"]} >
      <h1 className={style["pricing-header"]} >Our pricing is simple with no hidden fees</h1>
      <p className={style["pricing-text"]}>Pricing plans suitable for every individual and businesses</p>
      <div className={style["pricing-unit"]} >
        <p>Price / <span className={style["unit"]}>{switchUnit ? "Miles" : "Kilometer"}</span></p>
        <button className={style["pricing-unit-button"]} onClick={() => setSwitchUnit(!switchUnit)}>
          {switchUnit ? <FaToggleOff size="20px" style={{color: "var(--darkcyan)"}} /> : <FaToggleOn size="20px" style={{color: "var(--darkcyan)"}} />}
        </button>
      </div>
    </section>
  )
}

export default PricingHero