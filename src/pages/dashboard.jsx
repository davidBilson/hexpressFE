import React from 'react'
import DashboardHeader from '../components/UserDashboard/DashboardHeader'
import style from '../pageStyles/dashboard.module.css'
import DashboardNavigation from '../components/UserDashboard/DashboardNavigation'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <section className={style.dashboardSection}>
      <DashboardHeader />
      <DashboardNavigation />
      <Outlet />
    </section>
  )
}

export default Dashboard