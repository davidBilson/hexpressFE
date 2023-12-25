import React from 'react';
import style from './PricingCarousel.module.css';

const PricingCarousel = () => {
  return (
    <section className={style.pricingCarousel}>

      <div className={[style["pricingContainer1"], style.pricingContainer].join(' ')}>
        <div className={style.pricingDetails}>
          <div>
            <button className={style.pricingButton}>Swift</button>
            <p className={style.pricingAmount}>$<span className={style.pricingSpan}>3</span> </p>
            <p className={style.pricingText}>Per member, per year</p>
          </div>
          <div className={style.featureList}>
            <span className={style.featureItem}>20km - 80km</span>
            <span className={style.featureItem}>Standard Delivery</span>
            <span className={style.featureItem}>Package Tracking</span>
            <span className={style.featureItem}>Email Notifications</span>
          </div>
        </div>
        <p>The Swift Plan ensures timely deliveries within a 20km to 80km radius, providing standard services with reliability and support.</p>
        <button className={style.startButton}>Book  Delivery</button>
      </div>

      <div className={[style["pricingContainer2"], style.pricingContainer].join(' ')}>
        <div className={style.pricingDetails}>
          <div>
            <button className={style.pricingButton}>Efficient</button>
            <p className={style.pricingAmount}>$<span className={style.pricingSpan}>6</span> </p>
            <p className={style.pricingText}>Per member, per year</p>
          </div>
          <div className={style.featureList}>
            <span className={style.featureItem}>80km - 140km</span>
            <span className={style.featureItem}>Real-time GPS Tracking</span>
            <span className={style.featureItem}>Signature Confirmation</span>
            <span className={style.featureItem}>Expedited Delivery</span>
          </div>
        </div>
        <p>Opt for the Efficient Plan for quicker shipping within an 80km to 140km distance, offering expedited services and priority support for enhanced efficiency.</p>
        <button className={style.startButton}>Book  Delivery</button>
      </div>

      <div className={[style["pricingContainer3"], style.pricingContainer].join(' ')}>
        <div className={style.pricingDetails}>
          <div>
            <button className={style.pricingButton}>Global</button>
            <p className={style.pricingAmount}>$<span className={style.pricingSpan}>12</span> </p>
            <p className={style.pricingText}>Per member, per year</p>
          </div>
          <div className={style.featureList}>
            <span className={style.featureItem}>140km - 250km</span>
            <span className={style.featureItem}>Premium Package Protection</span>
            <span className={style.featureItem}>Dedicated Account Manager</span>
            <span className={style.featureItem}>24/7 Priority Support</span>
          </div>
        </div>
        <p>Cover longer distances seamlessly with the Global Plan, featuring express deliveries, premium protection, and dedicated support for distances between 140km and 250km.</p>
        <button className={style.startButton}>Book  Delivery</button>
      </div>

      <div className={[style["pricingContainer4"], style.pricingContainer].join(' ')}>
        <div className={style.pricingDetails}>
          <div>
            <button className={style.pricingButton}>Infinity</button>
            <p className={style.pricingAmount}>$<span className={style.pricingSpan}>18</span> </p>
            <p className={style.pricingText}>Per member, per year</p>
          </div>
          <div className={style.featureList}>
            <span className={style.featureItem}>250km and beyond</span>
            <span className={style.featureItem}>Same-day Delivery</span>
            <span className={style.featureItem}>White Glove Service</span>
            <span className={style.featureItem}>VIP Customer Concierge</span>
          </div>
        </div>
        <p>The Infinity Plan is designed for extensive distances, offering same-day delivery, premium handling, and VIP concierge service.</p>
        <button className={style.startButton}>Book  Delivery</button>
      </div>

    </section>
  );
};

export default PricingCarousel;
