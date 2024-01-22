import React, {useEffect} from 'react'
import useStore from '../../store/useStore'; 
import DashboardCarousel from './DashboardCarousel'
import DashboardStats from './DashboardStats'

const History = () => {
  const { user, userName } = useStore();
  // update page title as soon as user logs in
  useEffect(() => {
    document.title = user ? `Welcome ${userName.split(" ")[0]} - Logistics History` : "HEXPRESS | No.1 Trusted Logistics Company"
  }, [user]);

  return (
    <>
      <DashboardCarousel />
      <DashboardStats />
    </>
  )
}

export default History;