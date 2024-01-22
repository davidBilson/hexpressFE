import React, {useEffect} from 'react'
import useStore from '../../store/useStore';

const ShipNow = () => {
  const { user, userName } = useStore();
  // update page title as soon as user logs in
  useEffect(() => {
    document.title = user ? `Welcome ${userName.split(" ")[0]} - Ship Now` : "HEXPRESS | No.1 Trusted Logistics Company"
  }, [user]);
  
  return (
    <div>ShipNow</div>
  )
}

export default ShipNow