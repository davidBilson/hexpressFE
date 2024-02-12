import style from './styles/TransactionTimeFrame.module.css'
import { FaSortDown } from "react-icons/fa6";

const TransactionTimeFrame = () => {
  return (
    <section>
        <div>
          <button style={styleMonth}>Monthly Expense</button>
          <span>
            Sort by: 
            <button style={styleYear}>Year <FaSortDown /></button>
          </span>
        </div>

        {/* Monthly Expense */}
        <article className={style.timeFrameContainer}>
          <div>
            <ul>
              <li data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">January</li>
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
      </section>
  )
}

export default TransactionTimeFrame