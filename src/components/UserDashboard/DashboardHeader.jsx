import React from 'react';
import style from './DashboardHeader.module.css';

const DashboardHeader = () => {
  return (
    <section className={style.dashboardHeader}>
      <div className={style.headerContent}>
        <button className={style.orderTrack}>Order Tracking</button>
        <button className={style.inTransit}>In Transit</button>
        <button className={style.completed}>Completed</button>
      </div>
      <div className={style.bookDelivery}>
        <button className={style.liveTracking}>Live Tracking</button>
        <button className={style.bookDeliveryButton}>Book a Delivery</button>
      </div>
    </section>
  );
};

export default DashboardHeader;