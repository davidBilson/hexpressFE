import React, { useState, useEffect } from 'react';
import style from './styles/DashboardHeader.module.css';
import useStore from '../../store/useStore';
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import {AiOutlineClose} from 'react-icons/ai'

const DashboardHeader = () => {
  // const userName = useStore((initialState) => initialState.userName);
  const { userName, user } = useStore();
  const [timeOfDay, setTimeOfDay] = useState('');
  const [showNotification, setShowNotification] = useState(false)

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

  // const logout = () => {
  //   window.open("https://localhost:5000/auth/logout", "_self")
  // }

  return (
    <section className={style.dashboardHeaderContainer}>
        <div>
          <h2>Good {timeOfDay}, {userName.split(" ")[0]}!</h2>
          <p>
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>
              {new Date().toDateString()}
            </span>
          </p>
          <div className={style.dashboardNotifications}>
            <p onClick={() => setShowNotification(prev => true)}>
              <span><IoMdNotificationsOutline size={25} /></span>
              <span>5</span>
            </p>
            {
              showNotification &&
              <div data-aos="fade-down" className={style.dashboardCard}>
                  <h4>
                    Notification 
                    <span 
                      onClick={() => setShowNotification(prev => false)}>
                      <AiOutlineClose />
                    </span>
                  </h4>
                  <p>You have a lot of pending transactions, I would suggest you file them as soon as possible and proceed to withdraw your dividend.</p>
              </div>
            }
          </div>
        </div>
    </section>
  )
}

export default DashboardHeader