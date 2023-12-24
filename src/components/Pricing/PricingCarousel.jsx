import React from 'react';
import style from './PricingCarousel.module.css';

const PricingCarousel = () => {
  return (
    <section className={style.pricingCarousel}>

      <div className={[style["pricingContainer1"], style.pricingContainer].join(' ')}>
        <div className={style.pricingDetails}>
          <button className={style.pricingButton}>Swift</button>
          <p className={style.pricingAmount}>$<span className={style.pricingSpan}>0</span> </p>
          <p className={style.pricingText}>Per member, per year</p>
        </div>
        <div className={style.featureList}>
          <span className={style.featureItem}>lorem ipsum dolor</span>
          <span className={style.featureItem}>lorem ipsum dolor</span>
          <span className={style.featureItem}>lorem ipsum dolor</span>
          <span className={style.featureItem}>lorem ipsum dolor</span>
        </div>
        <button className={style.startButton}>Start for free</button>
      </div>

      <div className={[style["pricingContainer2"], style.pricingContainer].join(' ')}>
        <div className={style.pricingDetails}>
          <button className={style.pricingButton}>Efficient</button>
          <p className={style.pricingAmount}>$<span className={style.pricingSpan}>0</span> </p>
          <p className={style.pricingText}>Per member, per year</p>
        </div>
        <div className={style.featureList}>
          <span className={style.featureItem}>lorem ipsum dolor</span>
          <span className={style.featureItem}>lorem ipsum dolor</span>
          <span className={style.featureItem}>lorem ipsum dolor</span>
          <span className={style.featureItem}>lorem ipsum dolor</span>
        </div>
        <button className={style.startButton}>Start for free</button>
      </div>

      <div className={[style["pricingContainer3"], style.pricingContainer].join(' ')}>
        <div className={style.pricingDetails}>
          <button className={style.pricingButton}>Global</button>
          <p className={style.pricingAmount}>$<span className={style.pricingSpan}>0</span> </p>
          <p className={style.pricingText}>Per member, per year</p>
        </div>
        <div className={style.featureList}>
          <span className={style.featureItem}>lorem ipsum dolor</span>
          <span className={style.featureItem}>lorem ipsum dolor</span>
          <span className={style.featureItem}>lorem ipsum dolor</span>
          <span className={style.featureItem}>lorem ipsum dolor</span>
        </div>
        <button className={style.startButton}>Start for free</button>
      </div>

      <div className={[style["pricingContainer4"], style.pricingContainer].join(' ')}>
        <div className={style.pricingDetails}>
          <button className={style.pricingButton}>Infinity</button>
          <p className={style.pricingAmount}>$<span className={style.pricingSpan}>0</span> </p>
          <p className={style.pricingText}>Per member, per year</p>
        </div>
        <div className={style.featureList}>
          <span className={style.featureItem}>lorem ipsum dolor</span>
          <span className={style.featureItem}>lorem ipsum dolor</span>
          <span className={style.featureItem}>lorem ipsum dolor</span>
          <span className={style.featureItem}>lorem ipsum dolor</span>
        </div>
        <button className={style.startButton}>Start for free</button>
      </div>

    </section>
  );
};

export default PricingCarousel;
