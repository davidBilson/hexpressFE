import React, {useEffect} from 'react'
import useStore from '../../store/useStore';

const HexpressDelivery = () => {
  const { user, userName } = useStore();
  // update page title as soon as user logs in
  useEffect(() => {
    document.title = user ? `Welcome ${userName.split(" ")[0]} - Try Hexpress Delivery` : "HEXPRESS | No.1 Trusted Logistics Company"
  }, [user])

  return (
    <div>Hexpress Delivery</div>
  )
}

export default HexpressDelivery