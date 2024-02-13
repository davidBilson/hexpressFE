import React, {useEffect} from 'react';
import useStore from '../../store/useStore';
import style from './styles/Transactions.module.css'
import TransactionTimeFrame from './TransactionTimeFrame';
import PreLoader from '../PreLoader/PreLoader';
// Dynamic Import for lazy loading
const LazyTransactionCharts = React.lazy(() => import('./TransactionCharts'));

const Transactions = () => {
  const { user, userName } = useStore();
  // update page title as soon as user logs in
  useEffect(() => {
    document.title = user ? `Welcome ${userName.split(" ")[0]} - Transaction Logs` : "HEXPRESS | No.1 Trusted Logistics Company"
    }, [user])

  return (
    <section className={style.transactionContainer}> 
      <TransactionTimeFrame />
      {/* While mounting lazy loaded component, provide fallback UI (preloader) */}
      <React.Suspense fallback={<PreLoader />}>
        <LazyTransactionCharts />
      </React.Suspense>
    </section>
  )
}

export default Transactions