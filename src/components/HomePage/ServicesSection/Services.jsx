import React from 'react'
import style from './Service.module.css'
import servicesImage from '../../../assets/heroImage.jpg'
import servicesImage1 from '../../../assets/deliver1.jpg'
import servicesImage2 from '../../../assets/supportteam.jpg'
import personalShopper from '../../../assets/personalShopper.jpg'

const Services = () => {
  return (
    <section className={style.servicesSection}>

      <header className={style.servicesHeader}>
        <div >
          <span></span>
          <h2 className={style.servicesTitle}>Your #1 Partner in Seamless <span className={style.servicesTitleSpan}>Interstate Deliveries</span></h2>
        </div>
        <div>
          <p className={style.servicesDescription}>Experience swift, reliable, and affordable delivery and pickup services with us. We prioritize your satisfaction, ensuring seamless interstate logistics. Trust us to be your reliable partner for efficient and cost-effective deliveries.</p>
        </div>
      </header>

      <section className={style.service}>
        <div  
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-offset="0" 
          className={style.serviceItem}>
            <img src={servicesImage} alt="" />
            <div>
              <h4 className={style.serviceTitle}>Ship Now</h4>
              <p className={style.serviceDescription}>Request Pick Up, Delivery or Express Drop Off.</p>
            </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-offset="0" 
          className={style.serviceItem}>
            <img src={personalShopper} alt="" />
            <div>
              <h4 className={style.serviceTitle}>Personal Shopper</h4>
              <p className={style.serviceDescription}>Request a personal shopper to ease your burden.</p>
            </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-offset="0" 
          className={style.serviceItem}>
            <img src={servicesImage1} alt="" />
            <div>
              <h4 className={style.serviceTitle}>Shipping Routes</h4>
              <p className={style.serviceDescription}>Check all our available locations and states we deliver to.</p>
            </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-offset="0" 
          className={style.serviceItem}>
            <img src={servicesImage2} alt="" />
            <div>
              <h4 className={style.serviceTitle}>Contact Support Team</h4>
              <p className={style.serviceDescription}>Our services are 100% guaranteed. Have any issues, contact support team here.</p>
            </div>
        </div>
      </section>
    </section>
  )
}

export default Services