import React from 'react'
import { NavLink } from 'react-router-dom'

const DashboardNavigation = () => {

    const styleActiveNav = ({ isActive}) => {
        
    }

  return (
    <nav>
        <NavLink to='history'>History</NavLink>
        <NavLink to='ship-now'>Ship Now</NavLink>
        <NavLink to='hexpress-delivery'>Hexpress Delivery</NavLink>
        <NavLink to='overseas-shippping'>Overseas Shipping</NavLink>
        <NavLink to='transactions'>Transactions</NavLink>
        <NavLink to='personal-shopper'>Personal Shopper</NavLink>
    </nav>
  )
}

export default DashboardNavigation