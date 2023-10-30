import React from 'react'
import SideBar from '../components/UserDashboard/SideBAr'
import style from '../pageStyles/dashboard.module.css'
import DashboardBar from '../components/UserDashboard/DashboardBar'

const Dashboard = ({userName}) => {

  return (
    <section className={style.dashboardSection}>
      <SideBar userName={userName} />
      <section className={style.dashboardSectionSection} >
        <DashboardBar />
      </section>
    </section>
  )
}

export default Dashboard