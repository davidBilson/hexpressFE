import React, { useState } from 'react';
import style from './Hero.module.css';
import { toast   } from 'react-toastify';
import useStore from '../../../store/useStore';
import axios from 'axios';

const Hero = () => {

  const { setLoadAnimation, setUnLoadAnimation } = useStore();
  const [ parcelId, setParcelId ] = useState("");

  const toastErrorProperties = {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {
      width: '250px',
      fontSize: '14px',
      margin: "auto",
      borderRadius: "6px",
    }
  };

  const trackParcel = async (e) => {
    e.preventDefault();
    setLoadAnimation();

    if (parcelId === "") {
      toast.error("Enter waybill number!!", toastErrorProperties );
      setUnLoadAnimation();
      return;
    }

    try {
      const response = await axios.get("backendurlhere", {parcelId} )
      console.log(response)
    } catch (error) {
      console.log(error.message)
      toast.error("Couldn't fetch waybill number!", toastErrorProperties);
    }
  };

  return (
    <>
      <section className={style.heroSection}>
        <div className={style.heroSectionImageContainer}>
        </div>
        <article className={style.heroArticle}>
          <h1 className={style.heroTitle}>Fastest <span>Interstate Delivery</span> & Easy Pickup</h1>
          <p className={style.heroText}>Easy, fast, from point A to point B, seamlessly, within 24 hours.</p>
          <form className={style.heroForm} autoComplete="off" onSubmit={trackParcel}>
            <input
              type="text"
              className={style.heroInput}
              placeholder="Enter Tracking Number"
              value={parcelId}
              onChange={(e) => setParcelId(e.target.value)}
            />
            <button className={style.heroButton} type='submit'>Track Parcel</button>
          </form>
        </article>
      </section>
    </>
  );
};

export default Hero;