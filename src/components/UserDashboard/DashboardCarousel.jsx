import React from 'react'
import style from './DashboardCarousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TbBrandCashapp } from "react-icons/tb";
import { FaRoad, FaShippingFast, FaPlane } from "react-icons/fa";

const DashboardCarousel = () => {
  return (
    <>
      <section className={style.carouselContainer}>
      <Swiper
      style={{width: "100%"}}
        spaceBetween={15}
        slidesPerView={4}
        breakpoints={{
          100: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 10,
          },
          908: {
            slidesPerView: 3.1,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <div className={`${style.carousel} ${style.carousel1}`}>
            <p>
              <span>Total Shipment</span>
              <span><FaShippingFast size={"20px"} /></span>
            </p>
            <p>{"5"}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.carousel} ${style.carousel2}`}>
            <p>
              <span>Total Amount Spent</span>
              <span><TbBrandCashapp size={"20px"} /></span>
            </p>
            <p>{"$" + "429.00"}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.carousel} ${style.carousel3}`}>
            <p>
              <span>Road Freight</span>
              <span><FaRoad size={"20px"} /></span>
            </p>
            <p>{"4"}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.carousel} ${style.carousel4}`}>
            <p>
              <span>Air Freight</span>
              <span><FaPlane size={"20px"} /></span>
            </p>
            <p>{"1"}</p>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>
    </>
  )
}

export default DashboardCarousel