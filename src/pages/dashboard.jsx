import React from 'react'
import DashboardHeader from '../components/UserDashboard/DashboardHeader'
import style from '../pageStyles/dashboard.module.css'
import DashboardCarousel from '../components/UserDashboard/DashboardCarousel'

const Dashboard = ({userName}) => {

  return (
    <section className={style.dashboardSection}>
      <DashboardHeader />
      <DashboardCarousel />
    </section>
  )
}

export default Dashboard