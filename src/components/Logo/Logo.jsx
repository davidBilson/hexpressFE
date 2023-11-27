import React from 'react'
import style from './Logo.module.css'
import {TbTruckDelivery} from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom'

const Logo = () => {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/')} className={style.logo}>
      <span><TbTruckDelivery /></span>
      HEXPRESS
    </div>
  )
}

export default Logo