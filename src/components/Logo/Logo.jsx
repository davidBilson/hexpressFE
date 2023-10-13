import React from 'react'
import style from './Logo.module.css'
import {TbTruckDelivery} from 'react-icons/tb'

const Logo = () => {
  return (
    <div className={style.logo}>HEXPRESS<span><TbTruckDelivery /></span></div>
  )
}

export default Logo