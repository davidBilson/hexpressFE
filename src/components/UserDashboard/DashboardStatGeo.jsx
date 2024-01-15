import React from 'react'
import style from './DashboardStatGeo.module.css'
import MapBg from '../../assets/mapBg.jpeg'
import MapBg2 from '../../assets/mapBg2.jpg'

const DashboardStatGeo = () => {
  return (
    <section className={style.dashboardStatGeo}>
      <div className={style.mapContainer}>
        <img className={style.mapImageBg} src={MapBg} alt="map geolocation hexpress delivery" />
      </div>
      <div className={style.locationInfo}>
        <img className={style.mapImage} src={MapBg2} alt="map geolocation hexpress delivery" />
        <h3 className={style.locationTitle}>North East Washington DC</h3>
        <p className={style.locationAddress}>Fair Mount, North East Washingtop</p>
        <p className={style.distanceInfo}>7 miles left till destination</p>
      </div>
    </section>
  )
}
export default DashboardStatGeo