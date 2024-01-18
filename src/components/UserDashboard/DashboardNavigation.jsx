import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './DashboardNavigation.module.css'

const DashboardNavigation = () => {
    const styleActiveNav = ({ isActive}) => {
        return {
            backgroundColor: isActive ? 'rgb(0, 18, 117)' : 'inherit',
            color: isActive ? 'rgb(255, 255, 255)' : 'inherit',
        }
    }
  return (
    <div className={style.navigation}>
        <nav className={style.dashboardNavigation}>
            <NavLink style={styleActiveNav} to='history'>History</NavLink>
            <NavLink style={styleActiveNav} to='ship-now'>Ship Now</NavLink>
            <NavLink style={styleActiveNav} to='hexpress-delivery'>Hexpress Delivery</NavLink>
            <NavLink style={styleActiveNav} to='overseas-shipping'>Overseas Shipping</NavLink>
            <NavLink style={styleActiveNav} to='transactions'>Transactions</NavLink>
            <NavLink style={styleActiveNav} to='personal-shopper'>Personal Shopper</NavLink>
        </nav>
    </div>
  )
}

export default DashboardNavigation