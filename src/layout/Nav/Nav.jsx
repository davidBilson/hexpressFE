import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
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
          <Link to={'/'} className={style.navLink} onClick={closeNavigationBar}>Home</Link>
          <Link to={'/about'} className={style.navLink} onClick={closeNavigationBar}>About Us</Link>
          <Link className={style.navLink} onClick={closeNavigationBar}>Logistic Portfolio</Link>
          <Link className={style.navLink} onClick={closeNavigationBar}>Pricing</Link>
          <Link className={style.navLink} onClick={closeNavigationBar}>Tracking</Link>
          <Link className={style.navLink} onClick={closeNavigationBar}>Our Offices</Link>
          {user ? 
            (<Link to={'/dashboard'} onClick={closeNavigationBar} className={style.navLoginBtn}>Go to Dashboard</Link>)
            :
            (<Link to={'/sign-in'} onClick={closeNavigationBar} className={style.navLoginBtn}>Login / Sign Up</Link>)
          }
        </div>
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