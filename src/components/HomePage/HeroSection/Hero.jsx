import React from 'react';
import style from './Hero.module.css';
import heroImage from '../../../assets/heroImage.jpg'

const Hero = () => {
  return (
    <section className={style.heroSection}>
      <div className={style.heroSectionImageContainer}>
      </div>
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
          <button className={style.heroButton} type='submit'>Track Parcel</button>
        </form>
      </article>
    </section>
  );
};

export default Hero;
