import React from 'react'
import SideBar from '../components/UserDashboard/SideBAr'
import style from '../pageStyles/dashboard.module.css'

const Dashboard = ({userName}) => {

  return (
    <section className={style.dashboardSection}>
      <SideBar userName={userName} />
      <section></section>
    </section>
  )
}

export default Dashboard