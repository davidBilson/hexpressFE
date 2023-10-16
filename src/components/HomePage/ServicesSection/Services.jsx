import React from 'react'
import style from './Service.module.css'
import {TbTruckDelivery} from 'react-icons/tb'
import {AiOutlineShopping} from 'react-icons/ai'
import {MdAltRoute, MdSupportAgent} from 'react-icons/md'

const Services = () => {
  return (
    <section className={style.servicesSection}>
      <header className={style.servicesHeader}>
        <h2 className={style.servicesTitle}>Your #1 Partner in Seamless Interstate Deliveries</h2>
        <p className={style.servicesDescription}>We provide fast and reliable delivery and pickup services for you at a very affordable rate</p>
      </header>
      <section className={style.service}>
        <div className={style.serviceItem}>
            <span className={style.serviceIcon} ><TbTruckDelivery /></span>
            <h4 className={style.serviceTitle}>Ship Now</h4>
            <p className={style.serviceDescription}>Request Pick Up, Delivery or Express Drop Off.</p>
        </div>
        <div className={style.serviceItem}>
            <span className={style.serviceIcon} ><AiOutlineShopping /></span>
            <h4 className={style.serviceTitle}>Personal Shopper</h4>
            <p className={style.serviceDescription}>Request a personal shopper to ease your burden.</p>
        </div>
        <div className={style.serviceItem}>
            <span className={style.serviceIcon} ><MdAltRoute /></span>
            <h4 className={style.serviceTitle}>Shipping Routes</h4>
            <p className={style.serviceDescription}>Check all our available locations and states we deliver to.</p>
        </div>
        <div className={style.serviceItem}>
            <span className={style.serviceIcon} ><MdSupportAgent /></span>
            <h4 className={style.serviceTitle}>Contact Support Team</h4>
            <p className={style.serviceDescription}>Our services are 100% guaranteed. Have any issues, contact support team here.</p>
        </div>
      </section>
    </section>
  )
}

export default Services