import React, { useState, useEffect } from 'react';
import style from './SideBar.module.css'
import {NavLink} from 'react-router-dom'
import {BiHome, BiPowerOff} from 'react-icons/bi'
import {BsBagDash} from 'react-icons/bs'
import {LiaHistorySolid} from 'react-icons/lia'
import {AiOutlineWallet} from 'react-icons/ai'

const SideBar = ({userName}) => {
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
    <div className={style.sideBar}>
      <p className={style.sideBarName}>Good {timeOfDay} {userName}</p>
      <nav className={style.sideBarNav}>
        <NavLink><BiHome size={16} /> Dashboard</NavLink>
        <NavLink><BsBagDash size={16} /> Orders</NavLink>
        <NavLink><LiaHistorySolid size={16} /> History</NavLink>
        <NavLink><AiOutlineWallet size={16} /> Wallet</NavLink>
      </nav>
      <div>
        <p onClick={logout}><BiPowerOff size={16} /> Logout</p>
      </div>
    </div>
  );
};

export default SideBar;