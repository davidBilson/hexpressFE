import React from 'react'
import DashboardHeader from '../components/UserDashboard/DashboardHeader'
import style from '../pageStyles/dashboard.module.css'

const Dashboard = ({userName}) => {

  return (
    <section className={style.dashboardSection}>
      <DashboardHeader />
    </section>
  )
}

export default Dashboard