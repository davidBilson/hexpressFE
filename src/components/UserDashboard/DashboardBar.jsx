import React from 'react';
import { MdOutlineNotifications, MdOutlinePerson3 } from 'react-icons/md';
import style from './DashboardBar.module.css';

const DashboardBar = () => {
  return (
    <section>
      <div className={style.dashboardContainer}>
        <p className={style.dashboardTitle}>
          DASHBOARD/<span className={style.tracking}>TRACKING</span>
        </p>
        <div className={style.trackingInputs}>
          <input className={style.trackingInput} type="text" placeholder="Enter Tracking Number" />
          <input className={style.trackButton} type="submit" value={"Track Parcel"} />
        </div>
        <div className={style.buttonsContainer}>
          <button className={style.notificationsButton}>
            <MdOutlineNotifications />
          </button>
          <button className={style.profileButton}>
            <MdOutlinePerson3 />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardBar;
