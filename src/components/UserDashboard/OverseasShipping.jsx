import React, {useEffect} from 'react';
import useStore from '../../store/useStore'; 

const OverseasShipping = () => {
  const { user, userName } = useStore();
  // update page title as soon as user logs in
  useEffect(() => {
    document.title = user ? `Welcome ${userName.split(" ")[0]} - Ship Overseas` : "HEXPRESS | No.1 Trusted Logistics Company"
  }, [user])

  return (
    <div>OverseasShipping</div>
  )
}

export default OverseasShipping