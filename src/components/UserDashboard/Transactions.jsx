import React, {useEffect} from 'react'
import useStore from '../../store/useStore';

const Transactions = () => {
  const { user, userName } = useStore();
  // update page title as soon as user logs in
  useEffect(() => {
    document.title = user ? `Welcome ${userName.split(" ")[0]} - Transaction Logs` : "HEXPRESS | No.1 Trusted Logistics Company"
  }, [user])
  return (
    <div>Transactions</div>
  )
}

export default Transactions