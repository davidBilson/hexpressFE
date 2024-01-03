import React from 'react'
import style from './DashboardStats.module.css'
import DashboardStatDetail from './DashboardStatDetail'
import DashboardStatGeo from './DashboardStatGeo'

const DashboardStats = () => {
  return (
    <section>
        <DashboardStatDetail />
        <DashboardStatGeo />
    </section>
  )
}

export default DashboardStats