import React, {useEffect, useState} from 'react';
import useStore from '../../store/useStore';
import style from './styles/Transactions.module.css'
import TransactionTimeFrame from './TransactionTimeFrame';
import TransactionCharts from './TransactionCharts';

const Transactions = () => {
  const { user, userName } = useStore();
  // update page title as soon as user logs in
  useEffect(() => {
    document.title = user ? `Welcome ${userName.split(" ")[0]} - Transaction Logs` : "HEXPRESS | No.1 Trusted Logistics Company"
    }, [user])

  return (
    <section className={style.transactionContainer}> 
      <TransactionTimeFrame />
      <TransactionCharts />
    </section>
  )
}

export default Transactions