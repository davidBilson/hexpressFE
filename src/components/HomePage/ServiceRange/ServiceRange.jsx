import style from './ServiceRange.module.css'
const ServiceRange = () => {
    const terminologies = [
        "Express Delivery",
        "Freight Shipping",
        "Supply Chain",
        "Last-Mile Delivery",
        "Transportation Solutions",
        "Inventory Management",
        "Cross-Border Logistics",
        "E-commerce Fulfillment"
      ];
  return (
    <section className={style["service-range"]}>
            <div className={style["terminologies-container"]}>
                <div className={style["terminologies"]}>
                    {terminologies.map((term, index) => (
                        <span className={style["terminology"]} key={index}>
                            {term}
                        </span>
                    ))}
                </div>
            </div>
    </section>
  )
}
export default ServiceRange