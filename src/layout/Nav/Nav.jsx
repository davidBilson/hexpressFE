import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Nav = () => {
    const [showNav, setShowNav] = useState(false)

  return (
    <header className={style.navHeader}>
      <nav>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={showNav ? `${style["navLinks"]} ${style["showNav"]}` : style["navLinks"]} >
          <Link className={style.navLink}>Logistic Portfolio</Link>
          <Link className={style.navLink}>Our Offices</Link>
          <Link className={style.navLink}>Tracking</Link>
          <Link className={style.navLink}>Pricing</Link>
          <Link className={style.navLink}>FAQs</Link>
          <Link className={style.navLink}>About Us</Link>
        </div>
        <div className={style.loginLink}>
          <Link className={style.navLoginBtn}>Login / Sign Up</Link>
          <div onClick={() => setShowNav(!showNav)} className={style.navIcon}>
              {showNav ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Nav;