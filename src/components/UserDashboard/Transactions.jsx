import React, {useEffect, useState} from 'react';
import useStore from '../../store/useStore';
import style from './styles/Transactions.module.css'

const Transactions = () => {
  const { user, userName } = useStore();
  // update page title as soon as user logs in
  useEffect(() => {
    document.title = user ? `Welcome ${userName.split(" ")[0]} - Transaction Logs` : "HEXPRESS | No.1 Trusted Logistics Company"
    }, [user])

  const [timeFrame, setTimeFrame] = useState(true);

  const styleMonth = {
    backgroundColor: timeFrame ? "rgba(0, 18, 117, 0.6)" : "rgba(0, 18, 117, 0.3)",
    border: "none",
    padding: "12px",
    width: "150px",
    color: timeFrame ? "white" : "black",
    outline: "none"
  }
  const styleYear = {
    backgroundColor: !timeFrame ? "rgba(0, 18, 117, 0.6)" : "rgba(0, 18, 117, 0.3)",
    border: "none",
    padding: "12px",
    width: "150px",
    color: !timeFrame ? "white" : "black",
    outline: "none"
  }

  return (
    <>
      <section>
        <div>
          <button style={styleMonth} onClick={() => setTimeFrame((prev) => true)}>Monthly Expense</button>
          <button style={styleYear} onClick={() => setTimeFrame((prev) => false)}>Annual Expense</button>
        </div>

        {/* Monthly Expense */}
        {
          timeFrame &&
        <article>
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
        <article>
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
    </>
  )
}

export default Transactions