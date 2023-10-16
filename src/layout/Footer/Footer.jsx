import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className={style.logo}>
                    <Logo />
                </div>
                <div className={style.footerIcons}>
                    F
                    I
                    T
                </div>
            </section>
            <section>
                <div>
                    <span>Terms of Service</span>    
                    <span>Privacy Policy</span>    
                    <span>Support</span>    
                    <span>Careers</span>
                </div>
                <div>
                    <p>Copyright @2023 Hexpress. All rights reserved.</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer