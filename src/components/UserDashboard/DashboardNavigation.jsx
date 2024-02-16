import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import style from './styles/DashboardNavigation.module.css'
// Icons
import { FaHistory } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiSpeedBoat } from "react-icons/gi";
import { TbPlane } from "react-icons/tb";
import { MdShoppingCartCheckout } from "react-icons/md";

const DashboardNavigation = () => {

    const [isDevice480px, setIsDevice480px] = useState(false);

    useEffect(() => {
      const checkScreenWidth = () => {
        setIsDevice480px(window.innerWidth <= 480);
      };
      
      // Check screen width initially
      checkScreenWidth();
      console.log(isDevice480px)
      // Add event listener to update state when screen width changes
      window.addEventListener('resize', checkScreenWidth);
      
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', checkScreenWidth);
      };
    }, []);
    
    const styleActiveNav = ({ isActive}) => {
      return {
        backgroundColor: isActive ? 'rgb(0, 18, 117)' : 'inherit',
        color: isActive ? 'rgb(255, 255, 255)' : 'inherit',
        display: "flex",
        alignItems: 'center',
        gap: 10
      }
    }
      
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/dashboard/history')
    }, [])
  
  return (
    <div className={style.navigation}>
        <nav className={style.dashboardNavigation}>
            <NavLink style={styleActiveNav} to='/dashboard/history'><FaHistory /> {isDevice480px ? "" : "History"}</NavLink>
            <NavLink style={styleActiveNav} to='/dashboard/transactions'><AiOutlineTransaction />{isDevice480px ? "" : "Transactions"}</NavLink>
            <NavLink style={styleActiveNav} to='/dashboard/ship-now'><LiaShippingFastSolid />{isDevice480px ? "" : "Ship Now"}</NavLink>
            <NavLink style={styleActiveNav} to='/dashboard/hexpress-delivery'><GiSpeedBoat />{isDevice480px ? "" : "Hexpress Delivery"}</NavLink>
            <NavLink style={styleActiveNav} to='/dashboard/overseas-shipping'><TbPlane />{isDevice480px ? "" : "Overseas Shipping"}</NavLink>
            <NavLink style={styleActiveNav} to='/dashboard/personal-shopper'><MdShoppingCartCheckout />{isDevice480px ? "" : "Personal Shopper"}</NavLink>
        </nav>
    </div>
  )
}

export default DashboardNavigation;