import React, {useEffect, useState} from 'react';
import style from './styles/Transactions.module.css'

const TransactionTimeFrame = () => {
  const [timeFrame, setTimeFrame] = useState(true);

  const styleMonth = {
    backgroundColor: timeFrame ? "rgba(0, 18, 117, 0.6)" : "rgba(0, 18, 117, 0.3)",
    border: "none",
    padding: "12px",
    width: "150px",
    color: timeFrame ? "white" : "black",
    outline: "none",
    cursor: "pointer"
  }
  const styleYear = {
    backgroundColor: !timeFrame ? "rgba(0, 18, 117, 0.6)" : "rgba(0, 18, 117, 0.3)",
    border: "none",
    padding: "12px",
    width: "150px",
    color: !timeFrame ? "white" : "black",
    outline: "none",
    cursor: "pointer"
  }
  return (
    <section>
        <div>
          <button style={styleMonth} onClick={() => setTimeFrame((prev) => true)}>Monthly Expense</button>
          <button style={styleYear} onClick={() => setTimeFrame((prev) => false)}>Annual Expense</button>
        </div>

        {/* Monthly Expense */}
        {
          timeFrame &&
        <article className={style.timeFrameContainer}>
          <div>
            <ul>
              <li>January</li>
              <li>February</li>
              <li>March</li>
              <li>April</li>
              <li>May</li>
              <li>June</li>
              <li>July</li>
              <li>August</li>
              <li>September</li>
              <li>Octobebr</li>
              <li>November</li>
              <li>December</li>
            </ul>
          </div>
        </article>
        }
        {/* Annual expense */}
        {
          !timeFrame &&
        <article className={style.timeFrameContainer}>
          <div>
            <ul>
              <li>2022</li>
              <li>2023</li>
              <li>2024</li>
              <li>2025</li>
              <li>2026</li>
              <li>2027</li>
              <li>2028</li>
              <li>2029</li>
              <li>2030</li>
            </ul>
          </div>
        </article>
        }
      </section>
  )
}

export default TransactionTimeFrame