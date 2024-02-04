import React, { useEffect } from 'react';
import useStore from '../../store/useStore';
import { FaShippingFast } from 'react-icons/fa';
import style from './styles/ShipNow.module.css';

const ShipNow = () => {
  const { user, userName } = useStore();

  // update page title as soon as user logs in
  useEffect(() => {
    document.title = user
      ? `Welcome ${userName.split(' ')[0]} - Ship Now`
      : 'HEXPRESS | No.1 Trusted Logistics Company';
  }, [user]);

  return (
    <section className={style.deliverySection}>
      <div className={style.shippingIcon}>
        <FaShippingFast />
      </div>
      <button className={style.deliveryButton}>New Delivery</button>
    </section>
  );
};

export default ShipNow;