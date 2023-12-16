import Logo from '../../components/Logo/Logo'
import style from './Footer.module.css'
import {FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'
import { AiFillInstagram,} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className={style.footerContainer}>
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
                        <span className={style.footerLink} onClick={() => navigate('/terms-of-service')}>
                            Terms of Service
                        </span>
                        <span className={style.footerLink} onClick={() => navigate('/privacy-policy')}>
                            Privacy Policy
                        </span>
                        <span className={style.footerLink}>Support</span>
                        <span className={style.footerLink}>Careers</span>
                    </div>
                    <div className={style.footerCopyright}>
                        <p className={style.footerText}>Copyright @2023 Hexpress. All rights reserved.</p>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer