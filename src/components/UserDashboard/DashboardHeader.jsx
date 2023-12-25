import React, { useState, useEffect } from 'react';
import style from './DashboardHeader.module.css'
import useStore from '../../store/useStore'

const DashboardHeader = () => {
    const userName = useStore((initialState) => initialState.userName);
    const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    checkTimeOfDay();
  }, []);

  const checkTimeOfDay = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setTimeOfDay('morning');
    } else if (currentHour >= 12 && currentHour < 17) {
      setTimeOfDay('afternoon');
    } else {
      setTimeOfDay('evening');
    }
  };

  const logout = () => {
    window.open("https://localhost:5000/auth/logout", "_self")
  }

  return (
    <section className={style.dashboardHeaderContainer}>
        <p className={style.sideBarName}>Good {timeOfDay}, {userName.split(" ")[0]}!</p>
    </section>
  )
}

export default DashboardHeader