import React from 'react'
import DashboardHeader from '../components/UserDashboard/DashboardHeader'
import style from '../pageStyles/dashboard.module.css'
import DashboardCarousel from '../components/UserDashboard/DashboardCarousel'
import DashboardStats from '../components/UserDashboard/DashboardStats'

const Dashboard = ({userName}) => {

  return (
    <section className={style.dashboardSection}>
      <DashboardHeader />
      <DashboardCarousel />
      <DashboardStats />
    </section>
  )
}

export default Dashboard