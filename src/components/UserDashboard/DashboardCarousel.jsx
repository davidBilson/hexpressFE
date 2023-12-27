import React from 'react'
import style from './DashboardCarousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TbBrandCashapp } from "react-icons/tb";

const DashboardCarousel = () => {
  return (
    <>
      {/* <section className={style.carouselContainer}>
        <div className={style.carousel}>
          <p>
            <span>Total Shipment</span>
            <span><TbBrandCashapp size={"20px"} /></span>
          </p>
          <p>{"5"}</p>
        </div>
        <div className={style.carousel}>
          <p>
            <span>Total Amount Spent</span>
            <span><TbBrandCashapp size={"20px"} /></span>
          </p>
          <p>{"$" + "429.00"}</p>
        </div>
        <div className={style.carousel}>
          <p>
            <span>Road Freight</span>
            <span><TbBrandCashapp size={"20px"} /></span>
          </p>
          <p>{"4"}</p>
        </div>
        <div className={style.carousel}>
          <p>
            <span>Air Freight</span>
            <span><TbBrandCashapp size={"20px"} /></span>
          </p>
          <p>{"1"}</p>
        </div>
      </section> */}
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
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className={`${style.carousel} ${style.carousel1}`}>
            <p>
              <span>Total Shipment</span>
              <span><TbBrandCashapp size={"20px"} /></span>
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
              <span><TbBrandCashapp size={"20px"} /></span>
            </p>
            <p>{"4"}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.carousel} ${style.carousel4}`}>
            <p>
              <span>Air Freight</span>
              <span><TbBrandCashapp size={"20px"} /></span>
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