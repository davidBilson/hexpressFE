import Logo from '../../components/Logo/Logo'
import style from './Footer.module.css'
import {FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'
import { AiFillInstagram,} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <section className={style.footerSection}>
                <div className={style.logo}>
                    <Logo className={style.footerLogo} />
                </div>
                <div className={style.footerIcons}>
                    <FaFacebookSquare className={style.footerIcon} />
                    <AiFillInstagram className={style.footerIcon} />
                    <FaTwitterSquare className={style.footerIcon} />
                </div>
            </section>
            <section className={style.footerSection}>
                <div className={style.footerLinks}>
                    <span className={style.footerLink}>
                        <Link to={'/terms-of-service'}>Terms of Service</Link>
                    </span>
                    <span className={style.footerLink}>
                        <Link to={'privacy-policy'}>Privacy Policy</Link>
                    </span>
                    <span className={style.footerLink}>Support</span>
                    <span className={style.footerLink}>Careers</span>
                </div>
                <div className={style.footerCopyright}>
                    <p className={style.footerText}>Copyright @2023 Hexpress. All rights reserved.</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer