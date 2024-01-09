import React from 'react';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import style from './ErrorPage.module.css';

const ErrorPage = () => {

  return (
    <section className={style.errorPage}>
      <h1 className={style.errorHeading}>Error: 404 Page Not Found</h1>
      <h2 className={style.errorCode}>
        <span className={style.digit}>4</span>
        <span>
          <MdOutlineReportGmailerrorred className={style.errorIcon} />
        </span>
        <span className={style.digit}>4</span>
      </h2>
      <p className={style.errorMessage}>
        Sorry, the page you are looking for cannot be accessed.
      </p>
      <div className={style.buttonsContainer}>
        <button className={style.homeButton}>Home Page</button>
        <button className={style.signInButton}>Sign In</button>
      </div>
    </section>
  );
};

export default ErrorPage;