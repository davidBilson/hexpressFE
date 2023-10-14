import React from 'react';
import style from './Hero.module.css';

const Hero = () => {
  return (
    <section className={style.heroSection}>
      <article className={style.heroArticle}>
        <h1 className={style.heroTitle}>Fastest <span>Interstate Delivery</span> & Easy Pickup</h1>
        <p className={style.heroText}>
          Easy, fast, from point A to point B, seamlessly, within 24 hours.
        </p>
        <form className={style.heroForm}>
          <input
            type="text"
            className={style.heroInput}
            placeholder="Enter Tracking Number"
          />
          <button className={style.heroButton} type='submit'>Track Package</button>
        </form>
      </article>
    </section>
  );
};

export default Hero;
