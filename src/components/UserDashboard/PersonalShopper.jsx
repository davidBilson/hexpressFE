import React, {useEffect} from 'react'
import useStore from '../../store/useStore';

const PersonalShopper = () => {
  const { user, userName } = useStore();
  // update page title as soon as user logs in
  useEffect(() => {
    document.title = user ? `Welcome ${userName.split(" ")[0]} - Do you need a personal shopper?` : "HEXPRESS | No.1 Trusted Logistics Company"
  }, [user])

  return (
    <div>Personal Shopper</div>
  )
}

export default PersonalShopper