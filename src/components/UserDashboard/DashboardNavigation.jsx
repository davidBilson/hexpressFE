import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import style from './DashboardNavigation.module.css'

const DashboardNavigation = () => {
    
    const styleActiveNav = ({ isActive}) => {
        return {
            backgroundColor: isActive ? 'rgb(0, 18, 117)' : 'inherit',
            color: isActive ? 'rgb(255, 255, 255)' : 'inherit',
        }
    }

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/dashboard/history')
    }, [])

  return (
    <div className={style.navigation}>
        <nav className={style.dashboardNavigation}>
            <NavLink style={styleActiveNav} to='/dashboard/history'>History</NavLink>
            <NavLink style={styleActiveNav} to='/dashboard/ship-now'>Ship Now</NavLink>
            <NavLink style={styleActiveNav} to='/dashboard/hexpress-delivery'>Hexpress Delivery</NavLink>
            <NavLink style={styleActiveNav} to='/dashboard/overseas-shipping'>Overseas Shipping</NavLink>
            <NavLink style={styleActiveNav} to='/dashboard/transactions'>Transactions</NavLink>
            <NavLink style={styleActiveNav} to='/dashboard/personal-shopper'>Personal Shopper</NavLink>
        </nav>
    </div>
  )
}

export default DashboardNavigation;