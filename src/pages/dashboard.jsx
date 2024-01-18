import React from 'react'
import DashboardHeader from '../components/UserDashboard/DashboardHeader'
import style from '../pageStyles/dashboard.module.css'
import DashboardCarousel from '../components/UserDashboard/DashboardCarousel'
import DashboardStats from '../components/UserDashboard/DashboardStats'
import DashboardNavigation from '../components/UserDashboard/DashboardNavigation'
import { Outlet } from 'react-router-dom'

const Dashboard = ({userName}) => {

  return (
    <section className={style.dashboardSection}>
      <DashboardHeader />
      <DashboardNavigation />
      <Outlet />
    </section>
  )
}

export default Dashboard