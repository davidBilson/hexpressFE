import { useEffect, useRef, useState } from 'react';
import style from './styles/TransactionTimeFrame.module.css'
import { IoIosArrowDown } from "react-icons/io";

const TransactionTimeFrame = () => {

  const [showSortDropDown, setShowSortDropDown] = useState(false);
  const [sortText, setSortText] = useState("Monthly")
  const sortContainerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(sortContainerRef.current && !sortContainerRef.current.contains(e.target)) {
        setShowSortDropDown(false);
      }
    }
    window.addEventListener('click', handleClickOutside);
    // clean up effect
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const closeDropDown = () => {
    setShowSortDropDown(false);
  }

  return (    
        <div className={style.timeFrameContainer}>
          <span className={style.transactionText}>Transactions</span>
           <div className={style.sortContainer} ref={sortContainerRef}>
            Sort by: 
            <button
              className={style.sortBtn}
              onClick={() => setShowSortDropDown(!showSortDropDown)}>
                {sortText}<IoIosArrowDown size={16} />
            </button>
            {
              showSortDropDown &&
            <div className={style.sortDropdown}>
              <span onClick={() => {setSortText("Monthly"); closeDropDown()}} >Monthly</span>
              <span onClick={() => {setSortText("Weekly"); closeDropDown()}} >Weekly</span>
              <span onClick={() => {setSortText("Yearly"); closeDropDown()}} >Yearly</span>
            </div>
            }
          </div>
        </div>        
  )
}

export default TransactionTimeFrame