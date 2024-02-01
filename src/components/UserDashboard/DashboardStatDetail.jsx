import React from 'react'
import style from './styles/DashboardStats.module.css'

const DashboardStatDetail = () => {
  return (
    <div className={style["DashboardStatDetail"]}>
        <div className={style["DashboardStatDetail-top"]}>
            <h3>Shipment History</h3>
            <button>View all</button>
        </div>
        <div className={style["DashboardStatDetail-table"]}>
          <div className={style["DashboardStatDetail-table-header"]}>
              <div>Order ID</div>
              <div>Services</div>
              <div>Tier</div>
              <div>Date</div>
              <div>Status</div>
          </div>
          <div className={style["DashboardStatDetail-table-data"]}>
              <div>ID010203</div>
              <div>Delivery</div>
              <div>Swift</div>
              <div>01/01/2024</div>
              <div>In transit</div>
          </div>
          <div className={style["DashboardStatDetail-table-data"]}>
              <div>ID010203</div>
              <div>Delivery</div>
              <div>Swift</div>
              <div>01/01/2024</div>
              <div>In transit</div>
          </div>
        </div>
    </div>
  )
}

export default DashboardStatDetail