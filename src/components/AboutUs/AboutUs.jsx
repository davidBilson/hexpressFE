import React from 'react'
import style from './AboutUs.module.css'
import AboutImg from '../../assets/aboutUs.webp'
import {FaLocationDot} from 'react-icons/fa'

const AboutUs = () => {
  return (
    <main>
        <section className={style.aboutHero}>
        <div>

            <h1>
                Hexpress Delivery
            </h1>
            <p>
                Welcome to Hexpress, where speed and simplicity converge to provide you with the fastest interstate delivery and easy pickup logistics solutions. At Hexpress, we've made it our mission to redefine the way you think about logistics. We understand that in today's fast-paced world, businesses and individuals alike require swift, efficient, and reliable transportation services that connect point A to point B seamlessly, and that's exactly what we offer.
            </p>
        </div>
        <div>
            <img src={AboutImg} alt="Hexpress delivery" />
        </div>
        </section>
        <section className={style.aboutSection}>
            <h2>
                Our Commitment to Speed
            </h2>
            <p>
                We pride ourselves on being the industry leaders in speed. Whether you need to move goods, documents, or packages, we guarantee delivery within 24 hours. Our state-of-the-art logistics system and a network of strategic partners enable us to move your shipments swiftly and efficiently. When you choose Hexpress, you can trust that your time-sensitive deliveries are in the fastest hands.
            </p>
        </section>
        <section className={style.aboutSection}>
            <h2>
                Unmatched Convenience
            </h2>
            <p>
                Hexpress takes the hassle out of logistics. Our easy pickup and drop-off process means you can focus on your core business while we take care of the transportation. We offer pickup and drop-off locations across a wide network, making it convenient for you to access our services.
            </p>
        </section>
        <section className={style.aboutSection}>
            <h2>
                Our Pickup and Drop-off Locations
            </h2>
            <ul>
                <li>
                    <strong><FaLocationDot /> City Centers:</strong> Hexpress has strategically located centers in major city hubs, ensuring easy access and quick service in urban areas.
                </li>
                <li>
                    <strong>Business Hubs:</strong> For businesses, we offer pickup and drop-off services in prominent business districts, simplifying the shipping process.
                </li>
                <li>
                    <strong>Residential Areas:</strong> We extend our reach to residential neighborhoods, making it convenient for individuals to send and receive packages without leaving home.
                </li>
                <li>
                    <strong>Transportation Hubs:</strong> Our presence at transportation hubs such as airports, train stations, and bus terminals ensures seamless logistics for travelers and cargo alike.
                </li>
            </ul>
        </section>
        <section className={style.aboutSection}>
            <h2>
                Why Choose Hexpress?
            </h2>
            <ul>
                <li>
                    <strong>Reliability:</strong> We are committed to the safe and secure delivery of your shipments, ensuring they reach their destination on time, every time.
                </li>
                <li>
                    <strong>Professional Team:</strong> Our dedicated team of logistics experts is here to assist you in finding the best solutions for your needs.
                </li>
                <li>
                    <strong>Competitive Pricing:</strong> We offer cost-effective rates without compromising on the quality of service.
                </li>
                <li>
                    <strong>Cutting-Edge Technology:</strong> We leverage the latest technology to streamline logistics, providing you with real-time tracking and updates.
                </li>
            </ul>
        </section>
    </main>
  )
}

export default AboutUs