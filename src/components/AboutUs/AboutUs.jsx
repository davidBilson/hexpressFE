import React from 'react'
import style from './AboutUs.module.css'
import AboutImg from '../../assets/aboutUs.webp'
import {BiSolidBusiness, BiSolidEditLocation} from 'react-icons/bi'
import {BsFillHouseCheckFill} from 'react-icons/bs'
import {MdEmojiTransportation} from 'react-icons/md'

const AboutUs = () => {
  return (
    <main className={style.aboutMain}>
        <section className={style.aboutHero}>
            <div>
                <h1>Hexpress Delivery</h1>
                <p>
                    Welcome to Hexpress, where speed and simplicity converge to provide you with the fastest interstate delivery and easy pickup logistics solutions. At Hexpress, we've made it our mission to redefine the way you think about logistics. We understand that in today's fast-paced world, businesses and individuals alike require swift, efficient, and reliable transportation services that connect point A to point B seamlessly, and that's exactly what we offer.
                </p>
            </div>
            <div>
                <img src={AboutImg} alt="Hexpress delivery" />
            </div>
        </section>
        <section
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="0" 
            className={style.aboutSection}>
            <h2>Our Commitment to Speed</h2>
            <p>
                We pride ourselves on being the industry leaders in speed. Whether you need to move goods, documents, or packages, we guarantee delivery within 24 hours. Our state-of-the-art logistics system and a network of strategic partners enable us to move your shipments swiftly and efficiently. When you choose Hexpress, you can trust that your time-sensitive deliveries are in the fastest hands.
            </p>
        </section>
        <section
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="0" 
            className={style.aboutSection}>
            <h2>Unmatched Convenience</h2>
            <p>
                Hexpress takes the hassle out of logistics. Our easy pickup and drop-off process means you can focus on your core business while we take care of the transportation. We offer pickup and drop-off locations across a wide network, making it convenient for you to access our services.
            </p>
        </section>
        <section
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="0" 
            className={style.aboutSection}>
            <h2>Our Pickup and Drop-off Locations</h2>
            <ul>
                <li>
                    <span>
                        <BiSolidEditLocation className={style.aboutSectionIcons} />
                        <strong> City Centers</strong>
                    </span>
                    <span>Hexpress has strategically located centers in major city hubs, ensuring easy access and quick service in urban areas.</span>
                </li>
                <li>
                    <span>
                        <BiSolidBusiness className={style.aboutSectionIcons} />
                        <strong> Business Hubs</strong><br />
                    </span>
                    <span>For businesses, we offer pickup and drop-off services in prominent business districts, simplifying the shipping process.</span>
                </li>
                <li>
                    <span>
                        <BsFillHouseCheckFill className={style.aboutSectionIcons} />
                        <strong> Residential Areas</strong>
                    </span>
                    <span>We extend our reach to residential neighborhoods, making it convenient for individuals to send and receive packages without leaving home.</span>
                </li>
                <li>
                    <span>
                        <MdEmojiTransportation className={style.aboutSectionIcons} />
                        <strong> Transportation Hubs</strong>
                    </span>
                    <span>Our presence at transportation hubs such as airports, train stations, and bus terminals ensures seamless logistics for travelers and cargo alike.</span>
                </li>
            </ul>
        </section>
        <section
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-offset="0" 
            className={style.aboutSection}>
            <h2>Why Choose Hexpress?</h2>
            <ul>
                <li>
                    <strong style={{fontWeight: "700"}}>Reliability:</strong> We are committed to the safe and secure delivery of your shipments, ensuring they reach their destination on time, every time.
                </li>
                <li>
                    <strong style={{fontWeight: "700"}}>Professional Team:</strong> Our dedicated team of logistics experts is here to assist you in finding the best solutions for your needs.
                </li>
                <li>
                    <strong style={{fontWeight: "700"}}>Competitive Pricing:</strong> We offer cost-effective rates without compromising on the quality of service.
                </li>
                <li>
                    <strong style={{fontWeight: "700"}}>Cutting-Edge Technology:</strong> We leverage the latest technology to streamline logistics, providing you with real-time tracking and updates.
                </li>
            </ul>
        </section>
    </main>
  )
}

export default AboutUs