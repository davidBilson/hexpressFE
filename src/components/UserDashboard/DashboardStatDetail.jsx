import React from 'react'
import style from './DashboardStats.module.css'

const DashboardStatDetail = () => {
  return (
    <div className={style["DashboardStatDetail"]}>
        <div className={style["DashboardStatDetail-top"]}>
            <h3>Shipment Statistics</h3>
            <button>View all</button>
        </div>
        <div className={style["DashboardStatDetail-table-header"]}>
            <div>Order ID</div>
            <div>Services</div>
            <div>Category</div>
            <div>Date of Discharge</div>
            <div>Status</div>
            <div></div>
        </div>
    </div>
  )
}

export default DashboardStatDetail