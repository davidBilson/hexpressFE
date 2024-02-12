import { useState } from 'react';
import style from './styles/TransactionTimeFrame.module.css'
import { IoIosArrowDown } from "react-icons/io";

const TransactionTimeFrame = () => {

  const [showSortDropDown, setShowSortDropDown] = useState(false);

  return (    
        <div className={style.timeFrameContainer}>
          <span className={style.transactionText}>Transactions</span>
          <div className={style.sortContainer} >
            Sort by: 
            <button
              className={style.sortBtn}
              onClick={() => setShowSortDropDown(!showSortDropDown)}>
                Monthly<IoIosArrowDown size={16} />
            </button>
            {
              showSortDropDown &&
            <div className={style.sortDropdown}>
              <span>Monthly</span>
              <span>Weekly</span>
              <span>Yearly</span>
            </div>
            }
          </div>
        </div>        
  )
}

export default TransactionTimeFrame