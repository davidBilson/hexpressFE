import React from 'react'
import SideBar from '../components/UserDashboard/SideBar'
import style from '../pageStyles/dashboard.module.css'
import DashboardBar from '../components/UserDashboard/DashboardBar'
import DashboardHeader from '../components/UserDashboard/DashboardHeader'

const Dashboard = ({userName}) => {

  return (
    <section className={style.dashboardSection}>
      <SideBar userName={userName} />
      <section className={style.dashboardSectionSection} >
        <DashboardBar />
        <DashboardHeader />
      </section>
    </section>
  )
}

export default Dashboard