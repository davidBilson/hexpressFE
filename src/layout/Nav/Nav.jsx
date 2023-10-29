import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Nav = ({user}) => {

    const [showNav, setShowNav] = useState(false)

    const closeNav = () => setShowNav(false)

  return (
    <header className={style.navHeader}>
      <nav>
        <div className={style.logo} onClick={closeNav}>
          <Logo />
        </div>
        <div className={showNav ? `${style["navLinks"]} ${style["showNav"]}` : style["navLinks"]} >
          <Link to={'/'} className={style.navLink} onClick={closeNav}>Home</Link>
          <Link to={'/about'} className={style.navLink} onClick={closeNav}>About Us</Link>
          <Link className={style.navLink} onClick={closeNav}>Logistic Portfolio</Link>
          <Link className={style.navLink} onClick={closeNav}>Pricing</Link>
          <Link className={style.navLink} onClick={closeNav}>Tracking</Link>
          <Link className={style.navLink} onClick={closeNav}>Our Offices</Link>
        </div>
        <div className={style.loginLink}>
          {user ? 
            (<Link to={'/dashboard'} className={style.navLoginBtn}>Go to Dashboard</Link>)
            :
            (<Link to={'/sign-in'} className={style.navLoginBtn}>Login / Sign Up</Link>)
          }
          <div onClick={() => setShowNav(!showNav)} className={style.navIcon}>
              {showNav ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Nav;