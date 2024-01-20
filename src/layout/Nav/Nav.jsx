import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import useStore from '../../store/useStore';

const Nav = () => {
    // states from zustand
    const user = useStore((initialState) => initialState.user)
    
    const [showNav, setShowNav] = useState(false);
    const closeNavigationBar = () => setShowNav(false);

  return (
    <header className={style.navHeader}>
      <nav>
        <div className={style.logo} onClick={closeNavigationBar}>
          <Logo />
        </div>
        <div className={showNav ? `${style["navLinks"]} ${style["showNav"]}` : style["navLinks"]} >
          <Link to={'/'} className={style.navLink} onClick={closeNavigationBar}>
            <span>Home</span>
            <span><FaArrowRightFromBracket className={style.navItemArrow} /></span>
          </Link>
          <Link to={'/about'} className={style.navLink} onClick={closeNavigationBar}>
            <span>About Us</span>
            <span><FaArrowRightFromBracket className={style.navItemArrow} /></span>
          </Link>
          <Link to={'/pricing'} className={style.navLink} onClick={closeNavigationBar}>
            <span>Pricing</span>
            <span><FaArrowRightFromBracket className={style.navItemArrow} /></span>
          </Link>
          <Link className={style.navLink} onClick={closeNavigationBar}>
            <span>Tracking</span>
            <span><FaArrowRightFromBracket className={style.navItemArrow} /></span>
          </Link>
          <Link className={style.navLink} onClick={closeNavigationBar}>
            <span>Our Offices</span>
            <span><FaArrowRightFromBracket className={style.navItemArrow} /></span>
          </Link>
          {user ? 
            (<Link to={'/dashboard'} onClick={closeNavigationBar} className={style.navLoginBtn}>Go to Dashboard</Link>)
            :
            (<Link to={'/sign-in'} onClick={closeNavigationBar} className={style.navLoginBtn}>Login / Sign Up</Link>)
          }
        </div>
        {/* Put a profile dropdown here if user is logged in and it should be on mobile only */}
        <div className={style.loginLink}>
          <div 
            onClick={() => setShowNav(!showNav)}
            className={showNav? `${style["navIcon"]} ${style["navIcon2"]}` : `${style["navIcon"]}`}>
              {showNav ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Nav;